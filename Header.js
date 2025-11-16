// import React from 'react';
// import { FiShoppingCart, FiBook, FiSearch, FiUser } from 'react-icons/fi';

// const Header = ({ cartItemCount, onCartClick, onLogoClick, currentView }) => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-content">
//           <div className="logo" onClick={onLogoClick}>
//             <FiBook className="logo-icon" />
//             <span>BookWorm</span>
//           </div>
          
//           <nav className="nav">
//             <button 
//               className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
//               onClick={onLogoClick}
//             >
//               Home
//             </button>
//             <button className="nav-item">Categories</button>
//             <button className="nav-item">Best Sellers</button>
//             <button className="nav-item">New Releases</button>
//           </nav>

//           <div className="header-actions">
//             <div className="search-box">
//               <FiSearch className="search-icon" />
//               <input 
//                 type="text" 
//                 placeholder="Search books..." 
//                 className="search-input"
//               />
//             </div>
            
//             <button className="icon-btn">
//               <FiUser size={20} />
//             </button>
            
//             <button className="cart-btn" onClick={onCartClick}>
//               <FiShoppingCart size={20} />
//               {cartItemCount > 0 && (
//                 <span className="cart-badge">{cartItemCount}</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



















import React from 'react';
import { FiShoppingCart, FiBook, FiSearch, FiUser, FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';

const Header = ({ 
  cartItemCount, 
  onCartClick, 
  onLogoClick, 
  currentView,
  user,
  onLoginClick,
  onSignupClick,
  onLogout
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={onLogoClick}>
            <FiBook className="logo-icon" />
            <span>BookWorm</span>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
              onClick={onLogoClick}
            >
              Home
            </button>
            <button className="nav-item">Categories</button>
            <button className="nav-item">Best Sellers</button>
            <button className="nav-item">New Releases</button>
          </nav>

          <div className="header-actions">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search books..." 
                className="search-input"
              />
            </div>
            
            {user ? (
              <div className="user-menu">
                <button className="icon-btn user-btn">
                  <FiUser size={20} />
                  <span className="user-name">{user.firstName}</span>
                </button>
                <div className="user-dropdown">
                  <div className="user-info">
                    <strong>{user.firstName} {user.lastName}</strong>
                    <span>{user.email}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item">
                    <FiUser />
                    My Profile
                  </button>
                  <button className="dropdown-item">
                    <FiBook />
                    My Orders
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout-btn" onClick={onLogout}>
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="btn btn-outline login-btn" onClick={onLoginClick}>
                  <FiLogIn />
                  Login
                </button>
                <button className="btn btn-primary signup-btn" onClick={onSignupClick}>
                  <FiUserPlus />
                  Sign Up
                </button>
              </div>
            )}
            
            <button className="cart-btn" onClick={onCartClick}>
              <FiShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;