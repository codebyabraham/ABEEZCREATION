// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
// import '../App.css';

// // Import images for artworks
// import art1 from '../images/art1.jpg';
// import art2 from '../images/art2.jpg';
// // Add more imports for artworks

// const artworks = [
//   {
//     id: 1,
//     title: 'Abstract Beauty',
//     description: 'A beautiful abstract painting with vibrant colors.',
//     image: art1,
//     price: 150,
//   },
//   {
//     id: 2,
//     title: 'Nature in Harmony',
//     description: 'A serene landscape painting depicting harmony in nature.',
//     image: art2,
//     price: 250,
//   },
//   // Add more artwork objects here
// ];

// const ArtSpace = () => {
//   const [selectedArtwork, setSelectedArtwork] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

//   // Handle showing modal with artwork details
//   const handleShowModal = (artwork) => {
//     setSelectedArtwork(artwork);
//     setShowModal(true);
//   };

//   // Handle closing modal
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setShowForm(false);
//   };

//   // Handle form change
//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData, selectedArtwork);
//     // Here you would send the data to your backend or email service
//     alert('Thank you! We will contact you soon.');
//     setFormData({ name: '', email: '', phone: '' });
//     setShowForm(false);
//     setShowModal(false);
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-5">ArtSpace</h2>
//       <Row>
//         {artworks.map((artwork) => (
//           <Col md={4} key={artwork.id} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={artwork.image} />
//               <Card.Body>
//                 <Card.Title>{artwork.title}</Card.Title>
//                 <Card.Text>{artwork.description}</Card.Text>
//                 <Card.Text>
//                   <strong>Price: ${artwork.price}</strong>
//                 </Card.Text>
//                 <Button variant="primary" onClick={() => handleShowModal(artwork)}>
//                   View & Buy
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Modal for Artwork Details */}
//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedArtwork?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img src={selectedArtwork?.image} alt={selectedArtwork?.title} className="img-fluid mb-3" />
//           <p>{selectedArtwork?.description}</p>
//           <h4>Price: ${selectedArtwork?.price}</h4>
//           <Button variant="success" onClick={() => setShowForm(true)}>
//             Buy Now
//           </Button>
//         </Modal.Body>
//       </Modal>

//       {/* Modal for Purchase Form */}
//       <Modal show={showForm} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Purchase {selectedArtwork?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleFormChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleFormChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formPhone">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleFormChange}
//                 required
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="mt-3">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default ArtSpace;
