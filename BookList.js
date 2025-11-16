import React, { useState } from 'react';
import BookCard from './BookCard';
import { FiSearch, FiFilter } from 'react-icons/fi';

const BookList = ({ books, onAddToCart, searchQuery, onSearchChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const genres = ['all', 'fiction', 'mystery', 'thriller', 'science fiction', 'memoir', 'historical fiction', 'fantasy', 'self-help'];

  const filteredAndSortedBooks = books
    .filter(book => selectedGenre === 'all' || book.genre.toLowerCase() === selectedGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
      }
    });

  return (
    <section className="book-list-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Books</h2>
          <p>Discover our carefully curated selection of must-read titles</p>
        </div>

        {/* Filters and Search */}
        <div className="filters-bar">
          <div className="search-filter">
            <div className="search-box large">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by title, author, or genre..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <FiFilter className="filter-icon" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="form-select"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select"
              >
                <option value="featured">Featured</option>
                <option value="title">Title A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        {filteredAndSortedBooks.length > 0 ? (
          <div className="books-grid">
            {filteredAndSortedBooks.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3>No books found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookList;