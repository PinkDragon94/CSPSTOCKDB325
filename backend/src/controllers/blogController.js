const BlogPost = require('../models/BlogPost');


const handleAsync = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// Get all blog posts
exports.getAllPosts = handleAsync(async (req, res) => {
  const blogPosts = await BlogPost.find();
  res.json(blogPosts);
});

// Get a specific blog post by ID
exports.getPostById = handleAsync(async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
  res.json(blogPost);
});

// Create a new blog post
exports.createPost = handleAsync(async (req, res) => {
  const { title, summary, image, link } = req.body;
  const newBlogPost = new BlogPost({ title, summary, image, link });
  await newBlogPost.save();
  res.status(201).json(newBlogPost);
});

// Update a blog post by ID
exports.updatePost = handleAsync(async (req, res) => {
  const updatedBlogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedBlogPost) return res.status(404).json({ message: 'Blog post not found' });
  res.json(updatedBlogPost);
});

// Delete a blog post by ID
exports.deletePost = handleAsync(async (req, res) => {
  const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
  if (!deletedBlogPost) return res.status(404).json({ message: 'Blog post not found' });
  res.json({ message: 'Blog post deleted' });
});
