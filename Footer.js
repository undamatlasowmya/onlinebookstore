import React from 'react';
import { FiBook, FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FiBook />
              BookWorm
            </div>
            <p className="footer-description">
              Your trusted online bookstore with thousands of titles across all genres. 
              Discover your next favorite read with us.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FiFacebook />
              </a>
              <a href="#" className="social-link">
                <FiTwitter />
              </a>
              <a href="#" className="social-link">
                <FiInstagram />
              </a>
              <a href="#" className="social-link">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><a href="#">All Books</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Featured Authors</a></li>
              <li><a href="#">Deals & Offers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers and book recommendations</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 BookWorm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;