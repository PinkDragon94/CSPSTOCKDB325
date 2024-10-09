import React from 'react';
import Footer from '../components/Footer';
import '../styles/BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
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
        <h2>Welcome to the Blog</h2>
        <p>Your source for the latest stock predictions and trends.</p>
      </header>
      <div className="blog-content">
        <h1>Blog</h1>
        <p>This is the blog page. Here you will find articles and insights about stock predictions and market trends.</p>
      </div>
        {/* Add Footer component */}
        <Footer />
    </div>  // Close the outer div
  );
};

export default BlogPage;
