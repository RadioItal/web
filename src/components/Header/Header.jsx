import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Miniplayer from '../Player/MiniPlayer';
import { FiHome, FiMenu } from 'react-icons/fi';
import logo from '../../assets/images/logo radioital negro.png';
import './Header.css';

function Header({ metadata, isPlaying, handlePlayPause }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="header-link">
            <div className="brand-logo-container">
              <img className="brand-logo" src={logo} alt="RadioItal"/>
              <span className="app__brand-name app__brand-name--first">RADIO</span>
              <span className="app__brand-name app__brand-name--second">ITAL</span>
              <span className="app__brand-name app__brand-name--third">.</span>
              <span className="app__brand-name app__brand-name--forth">com</span>
            </div>
          </Link>
          <Miniplayer metadata={metadata} isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
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
          <FiMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
