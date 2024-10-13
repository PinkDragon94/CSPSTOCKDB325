import React, { useState } from 'react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blogposts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Blog post created:', data);
    } catch (err) {
      console.error('Error creating blog post:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="summary" placeholder="Summary" value={formData.summary} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input type="text" name="link" placeholder="Link" value={formData.link} onChange={handleChange} />
      <button type="submit">Create Blog Post</button>
    </form>
  );
};

export default BlogForm;
