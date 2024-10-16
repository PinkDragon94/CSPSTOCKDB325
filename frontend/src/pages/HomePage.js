import React from 'react';
import { Link } from 'react-router-dom';
// import StockTicker from '../components/StockTicker';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

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
        </ul>
      </nav>
      {/* <StockTicker /> */}
      <header className="hero">
        <h2>Lets Learn and Earn Together</h2>
        <p>Dashboard only Available for logged in users.</p>
        <Link to="/shop" className="shop-button">Shop Now</Link>
      </header>

      {/* New Rectangular Div */}
      <div className="welcome-box">
        <h2>Welcome to Pink Dragon Stock Shop</h2>
        <p>Your journey to the perfect workspace begins here.</p>
        <Link to="/login" className="nav-button">Log In</Link>
        <Link to="/signup" className="nav-button">Sign Up</Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

