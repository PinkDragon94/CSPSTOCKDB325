// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import StockTicker from '../components/StockTicker';
import StockTable from '../components/StockTable';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <h1>Stock Predictions Dashboard</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <StockTicker />
      <header className="hero">
        <h2>Welcome to Pink Dragon Stock Shop</h2>
        <p>Your journey to the perfect workspace begins here.</p>
        <Link to="/shop" className="shop-button">Shop Now</Link>
      </header>
      <StockTable />
      <Footer />
    </div>
  );
};

export default HomePage;


