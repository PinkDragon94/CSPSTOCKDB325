// src/controllers/predictionController.js

const Prediction = require('../models/Prediction');
    

// Get stock prediction for a specific stock symbol
const getStockPrediction = async (req, res) => {
    const { symbol } = req.params;
    try {
        const prediction = await Prediction.findOne({ stock: symbol });
        if (!prediction) {
            return res.status(404).json({ message: 'Prediction not found' });
        }
        res.json(prediction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch prediction' });
    }
};

// Make a new prediction
const makePrediction = async (req, res) => {
    const { stock, prediction, confidence } = req.body;
    try {
        const newPrediction = new Prediction({ stock, prediction, confidence });
        await newPrediction.save();
        res.status(201).json(newPrediction);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create prediction' });
    }
};

// Get all predictions
const getPredictions = async (req, res) => {
    try {
        const predictions = await Prediction.find();
        res.json(predictions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch predictions' });
    }
};

module.exports = {
    getStockPrediction,
    makePrediction,
    getPredictions
};
