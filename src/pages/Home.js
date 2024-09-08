import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <Container className="home-container mt-5">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 mb-5">
        <h1 className="hero-title mb-3">Welcome to ABEEZCREATION</h1>
        <p className="hero-subtitle mb-4">Capturing Moments That Last Forever</p>
        <Button as={Link} to="/portfolio" variant="dark" className="mt-3 hero-button">
          View Portfolio
        </Button>
      </section>

      {/* Services Section */}
      <section className="services-section mt-5">
        <h2 className="text-center mb-5">Our Services</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="service-card p-4 shadow-sm">
              <h3 className="service-title">Portraits</h3>
              <p>Beautiful and expressive portrait photography for individuals and families.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card p-4 shadow-sm">
              <h3 className="service-title">Weddings</h3>
              <p>Capturing the most special day of your life with elegance and style.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card p-4 shadow-sm">
              <h3 className="service-title">Events</h3>
              <p>Documenting events to create timeless memories you can cherish forever.</p>
            </div>
          </Col>
        </Row>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-5 mt-5">
        <h2 className="cta-title mb-4">Ready to Capture Your Special Moments?</h2>
        <Button as={Link} to="/booking" variant="primary" className="mt-3 cta-button">
          Book a Session Today
        </Button>
      </section>
    </Container>
  );
};

export default Home;
