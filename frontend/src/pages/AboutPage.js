import React from 'react';
import '../styles/AboutPage.css'; // Correct path to CSS

const AboutPage = () => {
  return (
    <div className="about-page">
      <nav className="navbar">
        <h1>Stock Predictions Dashboard</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
      <header className="hero">
        <h2>About Us</h2>
        <p>Your trusted source for stock predictions and market insights.</p>
      </header>
      <div className="about-content">
        <h3>Who We Are</h3>
        <p>We are a team of analysts and developers committed to providing accurate stock market predictions and insights to help investors make informed decisions.</p>
        <h3>Our Mission</h3>
        <p>Our mission is to empower individuals with the information they need to succeed in the stock market.</p>
      </div>
      <footer className="footer">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Stock Predictions Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

