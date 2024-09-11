// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css'; // Import your custom CSS

const NavigationBar = ({ toggleDarkMode, darkMode }) => {
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
            {/* Dark Mode Toggle Switch */}
            <div className="dark-mode-toggle">
              <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider"></span>
              </label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
