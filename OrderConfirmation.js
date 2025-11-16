import React from 'react';
import { FiCheckCircle, FiDownload, FiMail, FiHome } from 'react-icons/fi';

const OrderConfirmation = ({ order, onContinueShopping }) => {
  if (!order) {
    return (
      <div className="order-confirmation">
        <div className="container">
          <div className="confirmation-content">
            <h2>Order not found</h2>
            <button className="btn btn-primary" onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <div className="container">
        <div className="confirmation-content">
          <div className="confirmation-header">
            <FiCheckCircle className="success-icon" />
            <h1>Order Confirmed!</h1>
            <p className="confirmation-message">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <div className="order-number">
              Order #: <strong>{order.id}</strong>
            </div>
          </div>

          <div className="confirmation-details">
            <div className="detail-card card">
              <h3>Order Summary</h3>
              <div className="order-items">
                {order.items.map(item => (
                  <div key={item.id} className="order-item">
                    <div className="item-info">
                      <img src={item.image} alt={item.title} />
                      <div>
                        <h4>{item.title}</h4>
                        <p>by {item.author}</p>
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
                  <span>${order.total.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="total-row">
                  <span>Tax</span>
                  <span>${(order.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>${(order.total + 5.99 + (order.total * 0.08)).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="shipping-details card">
              <h3>Shipping Information</h3>
              <div className="shipping-info">
                <p><strong>{order.firstName} {order.lastName}</strong></p>
                <p>{order.address}</p>
                <p>{order.city}, {order.state} {order.zipCode}</p>
                <p>{order.email}</p>
              </div>
              
              <div className="estimated-delivery">
                <h4>Estimated Delivery</h4>
                <p>3-5 business days</p>
              </div>
            </div>
          </div>

          <div className="confirmation-actions">
            <button className="btn btn-outline">
              <FiDownload />
              Download Invoice
            </button>
            <button className="btn btn-outline">
              <FiMail />
              Email Receipt
            </button>
            <button className="btn btn-primary" onClick={onContinueShopping}>
              <FiHome />
              Continue Shopping
            </button>
          </div>

          <div className="next-steps">
            <h3>What's Next?</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <strong>Order Processing</strong>
                  <p>We're preparing your order for shipment</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <strong>Shipping</strong>
                  <p>Your order will be shipped within 24 hours</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <strong>Delivery</strong>
                  <p>Expected delivery in 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;