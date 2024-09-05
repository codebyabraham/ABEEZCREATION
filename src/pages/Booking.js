import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    serviceType: 'Portrait',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic (e.g., API call to backend)
    console.log('Booking details', bookingData);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Book a Session</h2>
      <Form onSubmit={handleBooking}>
        <Form.Group controlId="formServiceType">
          <Form.Label>Service Type</Form.Label>
          <Form.Control as="select" name="serviceType" value={bookingData.serviceType} onChange={handleChange}>
            <option>Portrait</option>
            <option>Wedding</option>
            <option>Event</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={bookingData.date} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" value={bookingData.time} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Book Now</Button>
      </Form>
    </Container>
  );
};

export default Booking;
