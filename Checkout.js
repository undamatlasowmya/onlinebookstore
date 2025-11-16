import React, { useState } from 'react';
import { FiArrowLeft, FiLock, FiCreditCard, FiUser, FiMapPin } from 'react-icons/fi';

const Checkout = ({ cart, getCartTotal, onBack, onOrderSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrderSubmit(formData);
  };

  const subtotal = getCartTotal();
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <button className="back-btn" onClick={onBack}>
            <FiArrowLeft />
            Back to Cart
          </button>
          <h1>Checkout</h1>
        </div>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="form-section">
              <h3>
                <FiUser />
                Contact Information
              </h3>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="form-section">
              <h3>
                <FiMapPin />
                Shipping Address
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="form-section">
              <h3>
                <FiCreditCard />
                Payment Information
              </h3>
              <div className="form-group">
                <label className="form-label">Name on Card</label>
                <input
                  type="text"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary checkout-submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              <FiLock />
              {isLoading ? 'Processing Order...' : `Pay $${total.toFixed(2)}`}
            </button>
          </form>

          {/* Order Summary */}
          <div className="checkout-summary card">
            <h3>Order Summary</h3>
            
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-info">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;