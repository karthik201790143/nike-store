import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>NIKE</h2>
          <p>
            Discover premium sneakers designed for performance,
            comfort, and everyday style.
          </p>

      
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Collections</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p> Hyderabad, India</p>
          <p>+91 98765 43210</p>
          <p>support@nikestore.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Nike Store. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;