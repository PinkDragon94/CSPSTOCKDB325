import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost'; // Assuming you have a BlogPost component
import Footer from '../components/Footer'; // Assuming you have a Footer component
import '../styles/BlogPage.css'; // Import your styles

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog posts

  // Function to fetch blog posts
  const fetchBlogs = async () => {
    try {
      const res = await fetch('/data/blogPosts.json'); // Adjust path as needed
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
    }
  };

  useEffect(() => {
    fetchBlogs(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this runs once

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
          blogs.map((blog, index) => <BlogPost key={index} post={blog} />)
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
