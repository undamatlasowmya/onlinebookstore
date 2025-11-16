// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import BookList from './components/BookList';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import OrderConfirmation from './components/OrderConfirmation';
// import Footer from './components/Footer';
// import { booksData } from './data/booksData';
// import './App.css';

// function App() {
//   const [currentView, setCurrentView] = useState('home');
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredBooks, setFilteredBooks] = useState(booksData);
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Filter books based on search query
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredBooks(booksData);
//     } else {
//       const query = searchQuery.toLowerCase();
//       const filtered = booksData.filter(book => 
//         book.title.toLowerCase().includes(query) ||
//         book.author.toLowerCase().includes(query) ||
//         book.genre.toLowerCase().includes(query)
//       );
//       setFilteredBooks(filtered);
//     }
//   }, [searchQuery]);

//   const addToCart = (book) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === book.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === book.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...book, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (bookId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== bookId));
//   };

//   const updateQuantity = (bookId, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === bookId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const getCartItemCount = () => {
//     return cart.reduce((count, item) => count + item.quantity, 0);
//   };

//   const handleCheckout = (orderData) => {
//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       const order = {
//         id: `ORD-${Date.now()}`,
//         ...orderData,
//         items: cart,
//         total: getCartTotal(),
//         orderDate: new Date().toISOString()
//       };
//       setOrderDetails(order);
//       setCart([]);
//       setCurrentView('confirmation');
//       setIsLoading(false);
//     }, 2000);
//   };

//   const renderCurrentView = () => {
//     switch (currentView) {
//       case 'cart':
//         return (
//           <Cart
//             cart={cart}
//             removeFromCart={removeFromCart}
//             updateQuantity={updateQuantity}
//             getCartTotal={getCartTotal}
//             onCheckout={() => setCurrentView('checkout')}
//             onContinueShopping={() => setCurrentView('home')}
//           />
//         );
//       case 'checkout':
//         return (
//           <Checkout
//             cart={cart}
//             getCartTotal={getCartTotal}
//             onBack={() => setCurrentView('cart')}
//             onOrderSubmit={handleCheckout}
//             isLoading={isLoading}
//           />
//         );
//       case 'confirmation':
//         return (
//           <OrderConfirmation
//             order={orderDetails}
//             onContinueShopping={() => {
//               setCurrentView('home');
//               setOrderDetails(null);
//             }}
//           />
//         );
//       default:
//         return (
//           <>
//             <Hero onBrowseBooks={() => setCurrentView('home')} />
//             <BookList
//               books={filteredBooks}
//               onAddToCart={addToCart}
//               searchQuery={searchQuery}
//               onSearchChange={setSearchQuery}
//             />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="App">
//       <Header
//         cartItemCount={getCartItemCount()}
//         onCartClick={() => setCurrentView('cart')}
//         onLogoClick={() => setCurrentView('home')}
//         currentView={currentView}
//       />
//       <main className="main-content">
//         {renderCurrentView()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;






























 import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { booksData } from './data/booksData';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(null); // 'login' or 'signup'

  // Check for stored user session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('bookstore_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Filter books based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredBooks(booksData);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = booksData.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
      );
      setFilteredBooks(filtered);
    }
  }, [searchQuery]);

  const addToCart = (book) => {
    if (!user) {
      setShowAuthModal('login');
      return;
    }
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handleCheckout = (orderData) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        ...orderData,
        items: cart,
        total: getCartTotal(),
        orderDate: new Date().toISOString()
      };
      setOrderDetails(order);
      setCart([]);
      setCurrentView('confirmation');
      setIsLoading(false);
    }, 2000);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('bookstore_user', JSON.stringify(userData));
    setShowAuthModal(null);
  };

  const handleSignup = (userData) => {
    setUser(userData);
    localStorage.setItem('bookstore_user', JSON.stringify(userData));
    setShowAuthModal(null);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem('bookstore_user');
    setCurrentView('home');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'cart':
        return (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            getCartTotal={getCartTotal}
            onCheckout={() => setCurrentView('checkout')}
            onContinueShopping={() => setCurrentView('home')}
            user={user}
            onLoginRequired={() => setShowAuthModal('login')}
          />
        );
      case 'checkout':
        return (
          <Checkout
            cart={cart}
            getCartTotal={getCartTotal}
            onBack={() => setCurrentView('cart')}
            onOrderSubmit={handleCheckout}
            isLoading={isLoading}
            user={user}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation
            order={orderDetails}
            onContinueShopping={() => {
              setCurrentView('home');
              setOrderDetails(null);
            }}
          />
        );
      default:
        return (
          <>
            <Hero onBrowseBooks={() => setCurrentView('home')} />
            <BookList
              books={filteredBooks}
              onAddToCart={addToCart}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              user={user}
            />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header
        cartItemCount={getCartItemCount()}
        onCartClick={() => setCurrentView('cart')}
        onLogoClick={() => setCurrentView('home')}
        currentView={currentView}
        user={user}
        onLoginClick={() => setShowAuthModal('login')}
        onSignupClick={() => setShowAuthModal('signup')}
        onLogout={handleLogout}
      />
      <main className="main-content">
        {renderCurrentView()}
      </main>
      <Footer />

      {/* Auth Modals */}
      {showAuthModal === 'login' && (
        <Login
          onClose={() => setShowAuthModal(null)}
          onLogin={handleLogin}
          onSwitchToSignup={() => setShowAuthModal('signup')}
        />
      )}

      {showAuthModal === 'signup' && (
        <Signup
          onClose={() => setShowAuthModal(null)}
          onSignup={handleSignup}
          onSwitchToLogin={() => setShowAuthModal('login')}
        />
      )}
    </div>
  );
}

export default App;