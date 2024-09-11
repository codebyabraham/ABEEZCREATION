
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css'; 

const NavigationBar = ({}) => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand href="/" className="navbar-brand-name">
          ABEEZCREATION
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link className="nav-link-custom">Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/packages">
              <Nav.Link className="nav-link-custom">Packages</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/booking">
              <Nav.Link className="nav-link-custom">Booking</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link-custom">Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/artspace">
              <Nav.Link className="nav-link-custom">ArtSpace</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
