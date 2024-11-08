import React from 'react';
import './Footer.css'; // Optional: For custom footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Sign with Me. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
