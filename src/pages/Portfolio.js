import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import './Portfolio.css'; // Import custom CSS for additional styling

// Importing images for segments
import portraitCover from '../images/portrait-cover.jpg';
import weddingCover from '../images/wedding-cover.jpg';
import photowalkCover from '../images/photowalk-cover.jpg';
import eventCover from '../images/event-cover.jpg';
import twsCover from '../images/tws-cover.jpg';

// Importing images to use in portfolioData
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import nine from '../images/9.jpg';
import ten from '../images/10.jpg';
import eleven from '../images/11.jpg';
import twelve from '../images/12.jpg';
import oneone from '../images/13.jpg';
import onetwo from '../images/14.jpg';
import onethree from '../images/15.jpg';
import onefour from '../images/16.jpg';
import onefive from '../images/17.jpg';
import onesix from '../images/18.jpg';
import oneseven from '../images/19.jpg';
import oneeight from '../images/20.jpg';
import onenine from '../images/21.jpg';
import oneten from '../images/22.jpg';
import oneeleven from '../images/23.jpg';
import onetwelve from '../images/24.jpg';
import twoone from '../images/25.jpg';


import eightyone from '../images/81.jpg';
import eightytwo from '../images/82.jpg';
import eightythree from '../images/83.jpg';
import eightyfour from '../images/84.jpg';
import eightyfive from '../images/85.jpg';


import sixtyone from '../images/61.jpg';
import sixtytwo from '../images/62.jpg';
import sixtythree from '../images/63.jpg';
import sixtyfour from '../images/64.jpg';
import sixtyfive from '../images/65.jpg';


import fiftyone from '../images/51.jpg';
import fiftytwo from '../images/52.jpg';
import fiftythree from '../images/53.jpg';
import fiftyfour from '../images/54.jpg';
import fiftyfive from '../images/55.jpg';



import seventyone from '../images/71.jpg';
import seventytwo from '../images/72.jpg';
import seventythree from '../images/73.jpg';
import seventyfour from '../images/74.jpg';
import seventyfive from '../images/75.jpg';

// PortfolioData
const portfolioData = {
  portraits: [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    oneone,
    onetwo,
    onethree,
    onefour,
    onefive,
    onesix,
    oneseven,
    oneeight,
    onenine,
    oneten,
    oneeleven,
    onetwelve,
    twoone,
    // Add more portrait images
  ],
  weddings: [
    eightyone,
    eightytwo,
    eightythree,
    eightyfour,
    eightyfive,
    // Add more wedding images
  ],
  photowalks: [
   sixtyone,
   sixtytwo,
   sixtythree,
   sixtyfour,
   sixtyfive,
    // Add more photowalk images
  ],
  events: [
    fiftyone,
    fiftytwo,
    fiftythree,
    fiftyfour,
    fiftyfive,
    // Add more event images
  ],
  tws: [
    seventyone,
    seventytwo,
    seventythree,
    seventyfour,
    seventyfour,
    // Add more TWS images
  ],
};

const Portfolio = () => {
  // State to manage modal visibility and selected segment
  const [showModal, setShowModal] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle opening the modal
  const handleShowModal = (segment) => {
    setSelectedSegment(segment);
    setSelectedImages(portfolioData[segment]);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mt-5 portfolio-container">
      <h2 className="text-center mb-5">Portfolio</h2>
      
      {/* Portfolio Segments */}
      <Row className="text-center">
        <Col md={4} className="mb-4">
          <div className="portfolio-segment" onClick={() => handleShowModal('portraits')}>
            <Image src={portraitCover} fluid />
            <h4 className="mt-3">Portraits</h4>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="portfolio-segment" onClick={() => handleShowModal('weddings')}>
            <Image src={weddingCover} fluid />
            <h4 className="mt-3">Weddings</h4>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="portfolio-segment" onClick={() => handleShowModal('photowalks')}>
            <Image src={photowalkCover} fluid />
            <h4 className="mt-3">Photowalks</h4>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="portfolio-segment" onClick={() => handleShowModal('events')}>
            <Image src={eventCover} fluid />
            <h4 className="mt-3">Events</h4>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="portfolio-segment" onClick={() => handleShowModal('tws')}>
            <Image src={twsCover} fluid />
            <h4 className="mt-3">TWS</h4>
          </div>
        </Col>
      </Row>

      {/* Modal to Show Images */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSegment.charAt(0).toUpperCase() + selectedSegment.slice(1)} Photos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {selectedImages.map((image, index) => (
              <Col md={4} key={index} className="mb-4">
                <Image src={image} fluid className="portfolio-image" />
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Portfolio;
