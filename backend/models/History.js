// backend/models/historyModel.js

const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stock', // Reference to the Stock model
    required: true,
  },
  action: {  // Action type: buy/sell
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true, // Automatically create timestamps for created/updated
});

const History = mongoose.model('History', historySchema);
module.exports = History;
