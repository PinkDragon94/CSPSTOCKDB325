// backend/models/Stock.js
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true, // Required field
  },
  symbol: {
    type: String,
    required: true, // Required field
    unique: true, // Ensure the stock symbol is unique
  },
  price: {
    type: Number,
    required: true, // Required field
  },
  // Add more fields as necessary
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
