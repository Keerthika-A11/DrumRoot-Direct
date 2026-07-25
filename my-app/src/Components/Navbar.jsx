import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>DrumRoot Direct</Link>
      </div>

      {/* 3 Bar Lines Icon */}
      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      {/* Button Model Menu Links */}
      <div style={{ ...styles.menu, display: isOpen ? 'flex' : 'none' }}>
        <Link to="/" style={styles.btnLink} onClick={toggleMenu}>Home</Link>
        <Link to="/about" style={styles.btnLink} onClick={toggleMenu}>About</Link>
        <Link to="/services" style={styles.btnLink} onClick={toggleMenu}>Services</Link>
        <Link to="/products" style={styles.btnLink} onClick={toggleMenu}>Products</Link>
        <Link to="/contact" style={styles.btnLink} onClick={toggleMenu}>Contact</Link>
        <Link to="/feedback" style={styles.btnLink} onClick={toggleMenu}>Feedback</Link>
        <Link to="/testimonials" style={styles.btnLink} onClick={toggleMenu}>Testimonials</Link>
      </div>
    </nav>
  );
}

// Button Styled Navigation
const styles = {
  nav: {
    backgroundColor: '#1b4332',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    color: '#fff'
  },
  logoText: {
    color: '#fff',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '25px',
    height: '18px',
    cursor: 'pointer'
  },
  bar: {
    height: '3px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  menu: {
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    right: '15px',
    backgroundColor: '#081c15',
    width: '210px',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    zIndex: 1000,
    gap: '10px'
  },
  // Button Design Style
  btnLink: {
    color: '#ffffff',
    backgroundColor: '#2d6a4f',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '600',
    padding: '10px 15px',
    borderRadius: '6px',
    textAlign: 'center',
    display: 'block',
    border: '1px solid #40916c',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  }
};

export default Navbar;