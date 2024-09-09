import React from 'react';
import facebook from '../images/icons8-facebook-150.png';
import twitter from '../images/icons8-twitterx-150.png';
import instagram from '../images/icons8-instagram-150.png';
import '../App.css';

const Footer = () => {
  return (
    <footer className="text-center mt-3 py-3 bg-light d-flex align-items-center justify-content-center">
      <div className="social-icons d-flex align-items-center">
        {/* Facebook Icon with Link */}
        <a href="https://web.facebook.com/codebyabraham" target="_blank" rel="noopener noreferrer" className="icon-link me-3">
          <img src={facebook} alt="Facebook" className="icon cart-icon" />
        </a>
        {/* Twitter Icon with Link */}
        <a href="https://twitter.com/abrahamyusuf_" target="_blank" rel="noopener noreferrer" className="icon-link me-3">
          <img src={twitter} alt="Twitter" className="icon cart-icon" />
        </a>
        {/* Instagram Icon with Link */}
        <a href="https://www.instagram.com/abrahamyusuf_" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src={instagram} alt="Instagram" className="icon cart-icon" />
        </a>
      </div>
      <p className="mt-3 mb-0">&copy; 2024 ABEEZCREATION. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
