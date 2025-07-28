import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="glass-navbar">
      <div className="nav-left">SHOPVERSE</div>
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-right">
        <Link to="/contact">
          <button className="nav-button">Let's Talk</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
