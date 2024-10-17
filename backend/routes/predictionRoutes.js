// src/routes/predictionRoutes.js

const express = require('express');
const {
    getStockPrediction,   // Get stock prediction for a specific stock symbol
    makePrediction,       // Make a new prediction
    getPredictions        // Get all predictions
} = require('../controllers/predictionController');

const router = express.Router();

// Define the routes
router.get('/:symbol', getStockPrediction);  // GET - Get prediction for a specific stock symbol
router.post('/', makePrediction);             // POST - Create a new prediction
router.get('/', getPredictions);              // GET - Get all predictions

module.exports = router;
