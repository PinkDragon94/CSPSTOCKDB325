// backend/routes/blogRoutes.js
import express from 'express';
import { getBlogs, createBlog } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', createBlog);
// Add other routes...

export default router;
