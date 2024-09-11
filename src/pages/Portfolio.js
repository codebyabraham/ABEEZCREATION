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
import hunone from '../images/51.jpg';
import huntwo from '../images/52.jpg';
import hunthree from '../images/53.jpg';
import hunfour from '../images/54.jpg';
import hunfive from '../images/55.jpg';
import hunsix from '../images/56.jpg';
import hunseven from '../images/57.jpg';
import huneight from '../images/58.jpg';
import hunnine from '../images/59.jpg';
import hunten from '../images/60.jpg';


import sixtyone from '../images/61.jpg';
import sixtytwo from '../images/62.jpg';
import sixtythree from '../images/63.jpg';
import sixtyfour from '../images/64.jpg';
import sixtyfive from '../images/65.jpg';
import sixtysix from '../images/66.jpg';
import sixtyseven from '../images/67.jpg';
import sixtyeight from '../images/68.jpg';
import sixtynine from '../images/69.jpg';
import sixtyten from '../images/70.jpg';
import sixtytenone from '../images/71.jpg';
import sixtytentwo from '../images/72.jpg';
import sixtytenthree from '../images/73.jpg';
import sixtytenfour from '../images/74.jpg';
import sixtytenfive from '../images/75.jpg';
import sixtytensix from '../images/76.jpg';
import sixtytenseven from '../images/77.jpg';
import sixtyteneight from '../images/78.jpg';
import sixtytennine from '../images/79.jpg';
import sixtytenten from '../images/80.jpg';


import fiftyone from '../images/81.jpg';
import fiftytwo from '../images/82.jpg';
import fiftythree from '../images/83.jpg';
import fiftyfour from '../images/84.jpg';
import fiftyfive from '../images/85.jpg';
import fiftysix from '../images/86.jpg';
import fiftyseven from '../images/87.jpg';
import fiftyeight from '../images/88.jpg';
import fiftynine from '../images/89.jpg';




import seventyone from '../images/90.jpg';
import seventytwo from '../images/91.jpg';
import seventythree from '../images/92.jpg';
import seventyfour from '../images/93.jpg';
import seventyfive from '../images/94.jpg';
import seventysix from '../images/95.jpg';
import seventyseven from '../images/96.jpg';
import seventyeight from '../images/97.jpg';
import seventynine from '../images/98.jpg';
import seventyten from '../images/99.jpg';
import seventy from '../images/100.jpg';

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
    hunone, 
    huntwo, 
    hunthree, 
    hunfour, 
    hunfive, 
    hunsix, 
    hunseven, 
    huneight, 
    hunnine, 
    hunten 

    // Add more wedding images
  ],
  events: [
    sixtyone, 
    sixtytwo, 
    sixtythree, 
    sixtyfour, 
    sixtyfive, 
    sixtysix, 
    sixtyseven, 
    sixtyeight, 
    sixtynine, 
    sixtyten, 
    sixtytenone, 
    sixtytentwo, 
    sixtytenthree, 
    sixtytenfour, 
    sixtytenfive, 
    sixtytensix, 
    sixtytenseven, 
    sixtyteneight, 
    sixtytennine, 
    sixtytenten, 
     // Add more photowalk images
  ],
  photowalks: [
    fiftyone,
    fiftytwo,
    fiftythree,
    fiftyfour,
    fiftyfive,
    fiftysix, 
    fiftyseven, 
    fiftyeight, 
    fiftynine
    // Add more event images
   ],
  tws: [
    seventyone,
    seventytwo,
    seventythree,
    seventyfour,
    seventyfive,
    seventysix, 
    seventyseven, 
    seventyeight, 
    seventynine, 
    seventyten, 
    seventy,  
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
                  onClick={() => handleImageClick(image)} 
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
              style={{ maxHeight: '80vh', maxWidth: '100%' }} 
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