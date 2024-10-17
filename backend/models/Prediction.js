// backend/models/predictionModel.js

const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
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
  predictionDate: {
    type: Date,
    required: true,
  },
  predictionValue: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true, // Automatically create timestamps for created/updated
});

const Prediction = mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;
