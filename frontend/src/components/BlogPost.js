import React from 'react';

const BlogPost = ({ post }) => {
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/api/blogposts/${post._id}`, {
        method: 'DELETE',
      });
      console.log('Blog post deleted');
    } catch (err) {
      console.error('Error deleting blog post:', err);
    }
  };

  return (
    <div className="blog-post">
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <img src={post.image} alt={post.title} />
      <a href={post.link}>Read More</a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogPost;
