import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleFontLoader } from 'react-google-font-loader';
import { FiHome, FiMenu } from 'react-icons/fi';
import logo from '../../assets/images/logo_radioital_blanco.png';
import './Header.css';

function Header({ metadata, isPlaying, handlePlayPause }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const BurgerIcon = () => (
    <svg
      viewBox="0 0 100 100"
      width="30"
      height="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" y1="20" x2="90" y2="20" stroke="red" strokeWidth="10" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="yellow" strokeWidth="10" />
      <line x1="10" y1="80" x2="90" y2="80" stroke="green" strokeWidth="10" />
    </svg>
  );

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="header-link">
            <div className="brand-logo-container">
              <img className="brand-logo" src={logo} alt="RadioItal"/>
              <span className="app__brand-name app__brand-name--first">WWW.RADIOITAL.COM</span>
            </div>
          </Link>
          {/* <Miniplayer metadata={metadata} isPlaying={isPlaying} handlePlayPause={handlePlayPause} /> */}
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="../About/About.jsx">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={handleMenuToggle}>
          <BurgerIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
