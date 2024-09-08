// src/pages/Packages.js

import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import './Packages.css'; // Import custom CSS for additional styling

// Import package images
import package1 from '../images/1a.jpg';
import package2 from '../images/1b.jpg';
import package3 from '../images/1c.jpg';
import package4 from '../images/1d.jpg';
import package5 from '../images/1e.jpg';
import package6 from '../images/1f.jpg';
import package7 from '../images/1g.jpg';
import package8 from '../images/1h.jpg';

// Add more package imports as needed


const packageData = [
  {
    id: 1,
    title: "Package 1",
    description: "Details about Package 1.",
    image: package1,
  },
  {
    id: 2,
    title: "Package 2",
    description: "Details about Package 2.",
    image: package2,
  },
  {
    id: 3,
    title: "Package 3",
    description: "Details about Package 3.",
    image: package3,
  },
  {
    id: 4,
    title: "Package 4",
    description: "Details about Package 4.",
    image: package4,
  },
  {
    id: 5,
    title: "Package 5",
    description: "Details about Package 5.",
    image: package5,
  },
  {
    id: 6,
    title: "Package 6",
    description: "Details about Package 6.",
    image: package6,
  },
  {
    id: 7,
    title: "Package 7",
    description: "Details about Package 7.",
    image: package7,
  },
  {
    id: 8,
    title: "Package 8",
    description: "Details about Package 8.",
    image: package8,
  },
  // Add more packages as needed
];

const Packages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Function to handle opening the modal
  const handleShowModal = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mt-5 packages-container">
      <h2 className="text-center mb-5">Our Photography Packages</h2>
      <Row className="text-center">
        {packageData.map((pkg) => (
          <Col md={4} className="mb-4" key={pkg.id}>
            <div className="package-item" onClick={() => handleShowModal(pkg)}>
              <Image src={pkg.image} fluid className="package-image" />
              <h4 className="mt-3">{pkg.title}</h4>
              <p>{pkg.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal to Show Expanded View */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedPackage && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPackage.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={selectedPackage.image} fluid className="expanded-image" />
              <p className="mt-3">{selectedPackage.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Packages;
