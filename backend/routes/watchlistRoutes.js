// src/routes/watchlistRoutes.js
const express = require('express');
const {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} = require('../controllers/watchlistController'); // Check this import
const router = express.Router();

// GET - Get all stocks in the watchlist
router.get('/', getWatchlist);

// POST - Add a stock to the watchlist
router.post('/', addToWatchlist);

// DELETE - Remove a stock from the watchlist
router.delete('/:id', removeFromWatchlist);

module.exports = router;
