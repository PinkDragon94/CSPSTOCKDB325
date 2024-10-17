// backend/models/watchlistModel.js

const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  stocks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stock', // Reference to the Stock model
  }],
}, {
  timestamps: true, // Automatically create timestamps for created/updated
});

const Watchlist = mongoose.model('Watchlist', watchlistSchema);
module.exports = Watchlist;
