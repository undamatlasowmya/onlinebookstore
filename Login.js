import React, { useState } from 'react';
import { FiX, FiMail, FiLock, FiEye, FiEyeOff, FiBook } from 'react-icons/fi';

const Login = ({ onClose, onLogin, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to your backend
      const userData = {
        id: 1,
        email: formData.email,
        firstName: 'John', // In real app, this would come from backend
        lastName: 'Doe',
        joinDate: new Date().toISOString()
      };
      
      onLogin(userData);
      setIsLoading(false);
    }, 1500);
  };

  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@bookstore.com',
      password: 'demo123'
    });
  };

  return (
    <div className="auth-modal">
      <div className="auth-backdrop" onClick={onClose}></div>
      <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">
            <FiBook />
            BookWorm
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <button type="button" className="forgot-password">
              Forgot password?
            </button>
          </div>

          <button 
            type="submit" 
            className={`btn btn-primary auth-submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          <div className="demo-login">
            <button 
              type="button" 
              className="btn btn-outline demo-btn"
              onClick={handleDemoLogin}
            >
              Use Demo Account
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <button className="auth-switch-btn" onClick={onSwitchToSignup}>
              Sign up now
            </button>
          </p>
        </div>

        <div className="auth-features">
          <div className="feature">
            <span>🔐</span>
            <span>Secure login</span>
          </div>
          <div className="feature">
            <span>📚</span>
            <span>Access your library</span>
          </div>
          <div className="feature">
            <span>🚚</span>
            <span>Faster checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;