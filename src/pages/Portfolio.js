import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Portfolio</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Image src="/path/to/photo1.jpg" fluid />
        </Col>
        <Col md={4} className="mb-4">
          <Image src="/path/to/photo2.jpg" fluid />
        </Col>
        {/* Add more images */}
      </Row>
    </Container>
  );
};

export default Portfolio;
