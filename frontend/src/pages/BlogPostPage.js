// src/pages/BlogPostPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogPage.css'; // Import CSS for the BlogPostPage

const BlogPostPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/blogPosts.json'); // Correctly fetching from the public folder
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const foundPost = data.find((p) => p.slug === slug); // Find the post by slug
        setPost(foundPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  const handleReadMore = () => {
    // Navigate to the post link when the button is clicked
    window.open(post.link, '_blank'); // Open link in a new tab
  };

  return (
    <div className="blog-post-page">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
            <button onClick={handleReadMore} className="read-more-button">Read More</button>
    </div>
  );
};

export default BlogPostPage;
