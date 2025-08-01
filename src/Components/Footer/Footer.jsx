import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} TemetaTech. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/privacypolicy">Privacy Policy</a></li>
          <li><a href="/termsandconditions">Terms & Conditions</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;