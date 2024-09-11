import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../App.css'; // Ensure this is imported

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    about: '',
    message: '',
    instagram: '',
    referral: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted', formData);
  };

  return (
    <Container className="contact-container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* First Name */}
          <Col md={6}>
            <Form.Group controlId="formFirstName" className="contact-form-group">
              <Form.Label className="contact-form-label">
                First Name <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                className="contact-form-control"
              />
            </Form.Group>
          </Col>
          
          {/* Last Name */}
          <Col md={6}>
            <Form.Group controlId="formLastName" className="contact-form-group">
              <Form.Label className="contact-form-label">
                Last Name <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="contact-form-control"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Email */}
        <Form.Group controlId="formEmail" className="contact-form-group">
          <Form.Label className="contact-form-label">
            Email <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="contact-form-control"
          />
        </Form.Group>

        {/* Phone Number */}
        <Form.Group controlId="formPhone" className="contact-form-group">
          <Form.Label className="contact-form-label">
            Phone Number <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="contact-form-control"
          />
        </Form.Group>

        {/* About Section */}
        <Form.Group controlId="formAbout" className="contact-form-group">
          <Form.Label className="contact-form-label">Tell us a little about yourself</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Share something about yourself"
            className="contact-form-control"
          />
        </Form.Group>

        {/* Your Message */}
        <Form.Group controlId="formMessage" className="contact-form-group">
          <Form.Label className="contact-form-label">
            Your Message <span className="required">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
            className="contact-form-control"
          />
        </Form.Group>

        {/* Instagram Handle */}
        <Form.Group controlId="formInstagram" className="contact-form-group">
          <Form.Label className="contact-form-label">Instagram Handle</Form.Label>
          <Form.Control
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Your Instagram username"
            className="contact-form-control"
          />
        </Form.Group>

        {/* Referral Section */}
        <Form.Group controlId="formReferral" className="contact-form-group">
          <Form.Label className="contact-form-label">Where did you hear about us?</Form.Label>
          <Form.Control
            type="text"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            placeholder="e.g., Google, Instagram, Friend, etc."
            className="contact-form-control"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="contact-button mt-4">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
