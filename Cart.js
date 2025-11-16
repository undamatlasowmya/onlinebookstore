// import React from 'react';
// import { FiPlus, FiMinus, FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';

// const Cart = ({ cart, removeFromCart, updateQuantity, getCartTotal, onCheckout, onContinueShopping }) => {
//   if (cart.length === 0) {
//     return (
//       <div className="cart-empty">
//         <div className="container">
//           <div className="empty-cart-content">
//             <FiShoppingBag size={64} />
//             <h2>Your cart is empty</h2>
//             <p>Looks like you haven't added any books to your cart yet.</p>
//             <button className="btn btn-primary" onClick={onContinueShopping}>
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page">
//       <div className="container">
//         <div className="cart-header">
//           <button className="back-btn" onClick={onContinueShopping}>
//             <FiArrowLeft />
//             Continue Shopping
//           </button>
//           <h1>Shopping Cart ({cart.length} items)</h1>
//         </div>

//         <div className="cart-content">
//           <div className="cart-items">
//             {cart.map(item => (
//               <div key={item.id} className="cart-item card">
//                 <div className="item-image">
//                   <img src={item.image} alt={item.title} />
//                 </div>
                
//                 <div className="item-details">
//                   <h3 className="item-title">{item.title}</h3>
//                   <p className="item-author">by {item.author}</p>
//                   <p className="item-genre">{item.genre}</p>
//                 </div>

//                 <div className="item-quantity">
//                   <button 
//                     className="quantity-btn"
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   >
//                     <FiMinus />
//                   </button>
//                   <span className="quantity">{item.quantity}</span>
//                   <button 
//                     className="quantity-btn"
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   >
//                     <FiPlus />
//                   </button>
//                 </div>

//                 <div className="item-price">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </div>

//                 <button 
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="cart-summary card">
//             <h3>Order Summary</h3>
            
//             <div className="summary-row">
//               <span>Subtotal</span>
//               <span>${getCartTotal().toFixed(2)}</span>
//             </div>
            
//             <div className="summary-row">
//               <span>Shipping</span>
//               <span>$5.99</span>
//             </div>
            
//             <div className="summary-row">
//               <span>Tax</span>
//               <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
//             </div>
            
//             <div className="summary-divider"></div>
            
//             <div className="summary-row total">
//               <span>Total</span>
//               <span>${(getCartTotal() + 5.99 + (getCartTotal() * 0.08)).toFixed(2)}</span>
//             </div>

//             <button className="btn btn-primary checkout-btn" onClick={onCheckout}>
//               Proceed to Checkout
//             </button>

//             <div className="security-features">
//               <div className="security-item">
//                 <span>🔒 Secure Checkout</span>
//               </div>
//               <div className="security-item">
//                 <span>🚚 Free Shipping over $50</span>
//               </div>
//               <div className="security-item">
//                 <span>↩️ 30-Day Returns</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;















import React from 'react';
import { FiPlus, FiMinus, FiTrash2, FiArrowLeft, FiShoppingBag, FiLogIn } from 'react-icons/fi';

const Cart = ({ 
  cart, 
  removeFromCart, 
  updateQuantity, 
  getCartTotal, 
  onCheckout, 
  onContinueShopping,
  user,
  onLoginRequired 
}) => {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <div className="empty-cart-content">
            <FiShoppingBag size={64} />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any books to your cart yet.</p>
            <button className="btn btn-primary" onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <button className="back-btn" onClick={onContinueShopping}>
            <FiArrowLeft />
            Continue Shopping
          </button>
          <h1>Shopping Cart ({cart.length} items)</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item card">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-author">by {item.author}</p>
                  <p className="item-genre">{item.genre}</p>
                </div>

                <div className="item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary card">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>$5.99</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${(getCartTotal() + 5.99 + (getCartTotal() * 0.08)).toFixed(2)}</span>
            </div>

            {user ? (
              <button className="btn btn-primary checkout-btn" onClick={onCheckout}>
                Proceed to Checkout
              </button>
            ) : (
              <button className="btn btn-primary checkout-btn" onClick={onLoginRequired}>
                <FiLogIn />
                Login to Checkout
              </button>
            )}

            <div className="security-features">
              <div className="security-item">
                <span>🔒 Secure Checkout</span>
              </div>
              <div className="security-item">
                <span>🚚 Free Shipping over $50</span>
              </div>
              <div className="security-item">
                <span>↩️ 30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;