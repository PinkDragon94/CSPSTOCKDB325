import React from 'react';
import Footer from '../components/Footer';
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
      <h3 style={{ textAlign: 'center' }}>Who We Are</h3>
        <p>We are a dedicated team of financial analysts and software developers, driven by a passion for delivering precise stock market predictions and actionable insights. Our expertise combines data analysis and cutting-edge technology to provide investors with the tools they need to navigate the complexities of the financial markets. We believe that financial success is a journey, and our goal is to empower individuals with the knowledge and insights necessary to make informed, confident decisions in the stock market.</p>
        <h3 style={{ textAlign: 'center' }}>Our Mission</h3>
        <p>Our mission is to empower individuals with the knowledge and insights necessary to make informed, confident decisions in the stock market. We strive to break down complex financial data and offer user-friendly solutions, helping investors at all levels achieve success in their investment journey.</p>
      </div>
        {/* Add Footer component */}
        <Footer />
    </div>  // Close the outer div
  );
};

export default AboutPage;

