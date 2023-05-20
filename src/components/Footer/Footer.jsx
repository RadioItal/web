import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-social-icons">
        <a href="https://www.facebook.com/radioitalradio">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/RadioItal">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/radioitalofficial/">
          <FaInstagram />
        </a>
      </div>
      <p className="footer-text">© 2023 RadioItal.com All rights reserved.</p>
    </footer>
  );
}

export default Footer;
