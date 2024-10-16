// src/components/BlogPost.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/BlogPost.css'; 

const BlogPost = ({ post }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = () => {
    // Navigate to the blog post page when the button is clicked
    navigate(`/blog/${post.slug}`); // Ensure slug matches the path defined in App.js
  };

  return (
    <div className="blog-post">
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <img src={post.image} alt={post.title} />
      <button onClick={handleReadMore} className="read-more-button">Read More</button>
    </div>
  );
};

export default BlogPost;
