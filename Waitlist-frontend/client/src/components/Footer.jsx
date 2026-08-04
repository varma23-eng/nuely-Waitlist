import React from 'react';
import '../styles/App.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>LET'S CONNECT</h4>
        
        <div className="footer-link">
          {/* Globe Icon SVG */}
          <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <a href="https://www.nuelyorganics.com" target="_blank" rel="noopener noreferrer">www.nuelyorganics.com</a>
        </div>

        <div className="footer-link">
          {/* Instagram Icon SVG */}
          <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <a href="https://instagram.com/thenuely" target="_blank" rel="noopener noreferrer">thenuely</a>
        </div>
      </div>

      <div className="footer-section">
        <h4>CONTACT US:</h4>
        <p className="footer-text">
          <span>Email ID:</span> 
          <a href="mailto:support@thenuely.in">support@thenuely.in</a>
        </p>
        <p className="footer-text">
          <span>Phone No.:</span> +91 7780522203, +91 7981622203
        </p>
      </div>
    </footer>
  );
}