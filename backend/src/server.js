// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const userRoutes = require('./routes/userRoutes.js');
// Use middleware
app.use(cors());
app.use(express.json());
app.use(logger); // Log requests
app.use('/api/blogs', blogRoutes);
app.use(errorHandler); // Error handling middleware
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    // Example Route
app.get('/', (req, res) => {
    res.send('Backend is running');
  });
  const blogRoutes = require('./routes/blog');
const shopRoutes = require('./routes/shop');
app.use('/api/blog', blogRoutes);
app.use('/api/shop', shopRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
