import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo" style={{ overflow: 'visible' }}>
              <img src="/logo.png" alt="Others Foundation Logo" className="logo-image" style={{ height: '80px', width: 'auto', marginBottom: '1rem', transform: 'scale(2.5)', transformOrigin: 'left center' }} />
            </div>
            <p className="footer-slogan">
              Standing in the gap for others, enabling young people to become productive.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#initiatives">Initiatives</a></li>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Financial Reports</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom glass-panel">
          <p>&copy; {new Date().getFullYear()} Others Foundation. All rights reserved.</p>
          <div className="made-with">
            Developed with <Heart size={16} className="heart-icon" /> for a better tomorrow.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
