// frontend/src/pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      {/* Navbar */}
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

      {/* Hero Section */}
      <header className="hero">
        <h2>Welcome to the Blog</h2>
        <p>Your source for the latest stock predictions and trends.</p>
      </header>

      {/* Blog Posts Section */}
      <div className="blog-content">
        <h1>Blog Posts</h1>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogPost key={blog._id} blog={blog} />)
        ) : (
          <p>No blog posts available yet.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
