import React from 'react';
import '../styles/HomePage.css'; 
import StockTicker from '../components/StockTicker';


const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
      <h1>Stock Predictions Dashboard</h1>
      <div>
     
     {/* Implement stock predictions, Bollinger Bands, buy/sell signals */}
   </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
  {/* Add the Stock Ticker here */}
  <StockTicker />
      <header className="hero">
        
        <h2>Welcome to Pink Dragon Stock Shop</h2>
        <p>Your journey to the perfect workspace begins here.</p>
        <a href="/shop" className="shop-button">Shop Now</a>
      </header>

      <footer className="footer">
        <p>&copy; 2024 PinkDragon94. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


