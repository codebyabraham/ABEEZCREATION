import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Ensure you have the relevant styling in your CSS file

const ArtSpace = () => {
  return (
    <Container className="mt-5 text-center artspace-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-5 shadow-sm artspace-card">
            <h2 className="artspace-title">Coming Soon!</h2>
            <p className="artspace-text lead mt-4">
              We are curating the very best art pieces for you to explore and purchase.
            </p>
            <p className="artspace-text mt-4">
              Stay tuned for an amazing collection of artworks that you will absolutely love!
            </p>
            <p className="artspace-text">
              In the meantime, follow us on our social media for updates and sneak peeks of what's to come!
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtSpace;
