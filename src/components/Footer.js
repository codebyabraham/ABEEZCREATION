import React from 'react';
import facebook from '../images/icons8-facebook-150.png';
import twitter from '../images/icons8-twitterx-150.png';
import instagram from '../images/icons8-instagram-150.png';
import '../App.css';

const Footer = () => {
  return (
    <footer className="text-center mt-3 py-3 bg-light">
      <div className="social-icons">
              <a href="#" className="icon-link"><img src={facebook} alt="Facebook" className="icon cart-icon" /></a>
              <a href="#" className="icon-link"><img src={twitter} alt="Twitter" className="icon cart-icon" /></a>
              <a href="#" className="icon-link"><img src={instagram} alt="Instagram" className="icon cart-icon" /></a>
            </div>
      <p className='mt-3'>&copy; 2024 ABEEZCREATION. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
