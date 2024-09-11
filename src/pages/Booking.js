import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../App.css'; // Import custom CSS for additional styling

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    serviceType: 'Portrait',
    date: '',
    time: '',
    outfits: 1,
    eventDuration: '',
    customEventDuration: '',
    weddingPackage: '',
    location: '',
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleEventDurationChange = (e) => {
    const value = e.target.value;
    setBookingData({
      ...bookingData,
      eventDuration: value,
      customEventDuration: value === 'Other' ? '' : bookingData.customEventDuration, // Reset custom duration if not 'Other'
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic (e.g., API call to backend)
    console.log('Booking details', bookingData);
  };

  return (
    <Container className="mt-5 booking-container">
      <h2 className="text-center mb-4">Book a Session</h2>
      <Form onSubmit={handleBooking} className="booking-form">
        {/* Service Type Selection */}
        <Form.Group controlId="formServiceType">
          <Form.Label>Service Type</Form.Label>
          <Form.Control as="select" name="serviceType" value={bookingData.serviceType} onChange={handleChange}>
            <option>Portrait</option>
            <option>Family Portrait</option>
            <option>Pre-Wedding</option>
            <option>Baby</option>
            <option>Maternity</option>
            <option>Wedding</option>
            <option>Event</option>
          </Form.Control>
        </Form.Group>

        {/* Conditional Fields Based on Service Type */}
        {(bookingData.serviceType === 'Portrait' ||
          bookingData.serviceType === 'Family Portrait' ||
          bookingData.serviceType === 'Pre-Wedding' ||
          bookingData.serviceType === 'Baby' ||
          bookingData.serviceType === 'Maternity') && (
          <Form.Group controlId="formOutfits">
            <Form.Label>Number of Outfits</Form.Label>
            <Form.Control type="number" name="outfits" min="1" max="10" value={bookingData.outfits} onChange={handleChange} />
          </Form.Group>
        )}

        {bookingData.serviceType === 'Wedding' && (
          <Form.Group controlId="formWeddingPackage">
            <Form.Label>Wedding Package</Form.Label>
            <Form.Control as="select" name="weddingPackage" value={bookingData.weddingPackage} onChange={handleChange}>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
              <option>Platinum</option>
            </Form.Control>
          </Form.Group>
        )}

        {bookingData.serviceType === 'Event' && (
          <>
            <Form.Group controlId="formEventDuration">
              <Form.Label>Event Duration</Form.Label>
              <Form.Control as="select" name="eventDuration" value={bookingData.eventDuration} onChange={handleEventDurationChange}>
              <option>1 Hour</option>
              <option>2 Hours</option>
              <option>3 Hours</option>
              <option>4 Hours</option>
              <option>5 hours</option>
              <option>Half Day</option>
              <option>Full Day</option>
              <option>Other</option> 
              </Form.Control>
            </Form.Group>

            {/* Show input field if 'Other' is selected for Event Duration */}
            {bookingData.eventDuration === 'Other' && (
              <Form.Group controlId="formCustomEventDuration">
                <Form.Label>Enter Event Duration</Form.Label>
                <Form.Control
                  type="text"
                  name="customEventDuration"
                  value={bookingData.customEventDuration}
                  onChange={handleChange}
                  placeholder="Enter custom duration (e.g., 3 hours)"
                />
              </Form.Group>
            )}
          </>
        )}

        {/* Location Selection (Disabled if Service Type is Wedding) */}
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            as="select"
            name="location"
            value={bookingData.location}
            onChange={handleChange}
            disabled={bookingData.serviceType === 'Wedding'} // Disable if Wedding is selected
          >
            <option value="">Please Select</option> {/* Default option */}
            <option>Outdoor</option>
            <option>Studio</option>
          </Form.Control>
        </Form.Group>

        {/* Common Fields for All Services */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={bookingData.date} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" value={bookingData.time} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-4 booking-button">
          Book Now
        </Button>
      </Form>
    </Container>
  );
};

export default Booking;
