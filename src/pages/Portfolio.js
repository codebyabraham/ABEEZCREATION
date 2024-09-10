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
import twotwo from '../images/26.jpg';
import twothree from '../images/27.jpg';
import twofour from '../images/28.jpg';
import twofive from '../images/29.jpg';
import twosix from '../images/30.jpg';



import eightyone from '../images/31.jpg';
import eightytwo from '../images/32.jpg';
import eightythree from '../images/33.jpg';
import eightyfour from '../images/34.jpg';
import eightyfive from '../images/35.jpg';
import eightysix from '../images/36.jpg';
import eightyseven from '../images/37.jpg';
import eightyeight from '../images/38.jpg';
import eightynine from '../images/39.jpg';
import ninety from '../images/40.jpg';
import ninetyone from '../images/41.jpg';
import ninetytwo from '../images/42.jpg';
import ninetythree from '../images/43.jpg';
import ninetyfour from '../images/44.jpg';
import ninetyfive from '../images/45.jpg';
import ninetysix from '../images/46.jpg';
import ninetyseven from '../images/47.jpg';
import ninetyeight from '../images/48.jpg';
import ninetynine from '../images/49.jpg';
import hun from '../images/50.jpg';


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
    twotwo, 
    twothree,
    twofour, 
    twofive, 
    twosix
  ],
  weddings: [
    eightyone,
    eightytwo,
    eightythree,
    eightyfour,
    eightyfive,
    eightysix,
    eightyseven,
    eightyeight,
    eightynine,
    ninety,
    ninetyone, 
    ninetytwo,   
    ninetythree, 
    ninetyfour,
    ninetyfive,
    ninetysix, 
    ninetyseven, 
    ninetyeight, 
    ninetynine,
    hun,  
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
    seventyfive,
    // Add more TWS images
  ],
};

const Portfolio = () => {
  // State to manage modal visibility and selected segment
  const [showModal, setShowModal] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Function to handle opening the modal
  const handleShowModal = (segment) => {
    setSelectedSegment(segment);
    setSelectedImages(portfolioData[segment]);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => setShowModal(false);

  // Function to handle clicking on an image for better display
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowImageModal(true);
  };

  // Function to handle closing the image modal
  const handleCloseImageModal = () => setShowImageModal(false);

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
                <Image
                  src={image}
                  fluid
                  className="portfolio-image"
                  onClick={() => handleImageClick(image)} // Open image display modal on image click
                  style={{ cursor: 'pointer' }}
                />
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

      {/* Modal for Improved Image Display */}
      <Modal show={showImageModal} onHide={handleCloseImageModal} size="lg" centered>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          {currentImage && (
            <Image
              src={currentImage}
              fluid
              style={{ maxHeight: '80vh', maxWidth: '100%' }} // Set max dimensions for better display
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImageModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Portfolio;