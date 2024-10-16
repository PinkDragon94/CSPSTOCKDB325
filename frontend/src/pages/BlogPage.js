// src/pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import '../styles/BlogPage.css'; // Importing styles for the BlogPage

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog posts

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogPosts.json'); // Correctly fetch from public folder
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs(); // Call the fetch function on component mount
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
        <h1 className="centered-heading">Blog Posts</h1>
        {blogs.length > 0 ? (
          <div>
            {blogs.map((post) => (
              <BlogPost key={post.id} post={post} /> // Use unique id for the key
            ))}
          </div>
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
