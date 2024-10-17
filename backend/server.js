require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON body parsing
app.use(express.json());

// Routes



const stockRoutes = require('./routes/stockRoutes');
const historyRoutes = require('./routes/historyRoutes');
const predictionRoutes = require('./routes/predictionRoutes');
const watchlistRoutes = require('./routes/watchlistRoutes');

// Use routes with their respective endpoints



app.use('/stocks', stockRoutes);
app.use('/history', historyRoutes);
app.use('/predictions', predictionRoutes);
app.use('/watchlist', watchlistRoutes);

// Database connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Base route for testing server functionality
app.get('/', (req, res) => {
  res.send('Welcome to the Stock App!');
});

// Error handling middleware  
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
