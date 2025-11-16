import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero = ({ onBrowseBooks }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover Your Next
              <span className="highlight"> Favorite Book</span>
            </h1>
            <p className="hero-description">
              Explore our vast collection of books across all genres. 
              From thrilling mysteries to inspiring biographies, find the perfect read 
              that will transport you to new worlds.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={onBrowseBooks}>
                Browse Collection
                <FiArrowRight />
              </button>
              <button className="btn btn-outline">
                View Best Sellers
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Books Available</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Happy Readers</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="book-stack">
              <div className="book book-1"></div>
              <div className="book book-2"></div>
              <div className="book book-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;