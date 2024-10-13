const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// Define routes using controller methods
router.get('/', blogController.getAllPosts);
router.get('/:id', blogController.getPostById);
router.post('/', blogController.createPost);
router.put('/:id', blogController.updatePost);
router.delete('/:id', blogController.deletePost);

module.exports = router;

