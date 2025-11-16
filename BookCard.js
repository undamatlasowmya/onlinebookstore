import React, { useState } from 'react';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

const BookCard = ({ book, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(book);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={index < Math.floor(rating) ? 'star filled' : 'star'}
        fill={index < Math.floor(rating) ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <>
      <div className="book-card card">
        {book.featured && <div className="featured-badge">Featured</div>}
        
        <div className="book-image">
          <img src={book.image} alt={book.title} />
          <div className="book-overlay">
            <button 
              className={`like-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <FiHeart />
            </button>
          </div>
        </div>

        <div className="book-content">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          
          <div className="book-rating">
            <div className="stars">
              {renderStars(book.rating)}
            </div>
            <span className="rating-text">
              {book.rating} ({book.reviews.toLocaleString()})
            </span>
          </div>

          <p className="book-genre">{book.genre}</p>
          
          <p className="book-description">{book.description}</p>

          <div className="book-footer">
            <div className="book-price">${book.price}</div>
            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <FiShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          ✅ {book.title} added to cart!
        </div>
      )}
    </>
  );
};

export default BookCard;