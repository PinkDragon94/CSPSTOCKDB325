// src/pages/SignUpPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import StockTicker from '../components/StockTicker';
import Footer from '../components/Footer';

const SignUpPage = () => {
  const { googleSignUp } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    try {
      await googleSignUp();
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to sign up with Google', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Stock Predictions Dashboard</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/dashboard" className="btn">Dashboard</Link></li>
          <li><Link to="/login" className="btn">Log In</Link></li>
          <li><Link to="/signup" className="btn">Sign Up</Link></li>
        </ul>
      </nav>
      <StockTicker />
      <div>
        <h2>Sign Up</h2>
        <button onClick={handleGoogleSignUp} className="btn">Sign Up with Google</button>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;

