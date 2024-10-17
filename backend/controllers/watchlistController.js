// src/controllers/watchlistController.js
const Watchlist = require('../models/Watchlist'); // Ensure this model exists

// Get all stocks in the watchlist
const getWatchlist = async (req, res) => {
  try {
    const watchlistEntries = await Watchlist.find();
    res.json(watchlistEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch watchlist', error: error.message });
  }
};

// Add a stock to the watchlist
const addToWatchlist = async (req, res) => {
  const { stockId } = req.body; // Adjust based on your request body structure

  try {
    const newWatchlistEntry = new Watchlist({ stockId });
    const savedEntry = await newWatchlistEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to add to watchlist', error: error.message });
  }
};

// Remove a stock from the watchlist
const removeFromWatchlist = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEntry = await Watchlist.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Watchlist entry not found' });
    }
    res.json({ message: 'Watchlist entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete watchlist entry', error: error.message });
  }
};

module.exports = {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
};
