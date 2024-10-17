// src/controllers/stockController.js
const Stock = require('../models/Stock');

// Get all stocks
const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find(); // Fetch all stocks
    res.json(stocks); // Send stocks as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve stocks', error: error.message });
  }
};

// Get a stock by ID
const getStockById = async (req, res) => {
  const { id } = req.params;

  try {
    const stock = await Stock.findById(id);
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve stock', error: error.message });
  }
};

// Add a new stock
const addStock = async (req, res) => {
  const { name, symbol, price } = req.body;

  try {
    const stock = new Stock({ name, symbol, price });
    const savedStock = await stock.save();
    res.status(201).json(savedStock);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create stock', error: error.message });
  }
};

// Update a stock by ID
const updateStock = async (req, res) => {
  const { id } = req.params;
  const { name, symbol, price } = req.body;

  try {
    const stock = await Stock.findByIdAndUpdate(id, { name, symbol, price }, { new: true });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating stock', error: error.message });
  }
};

// Delete a stock
const deleteStock = async (req, res) => {
  const { id } = req.params;

  try {
    const stock = await Stock.findByIdAndDelete(id);
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json({ message: 'Stock deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting stock', error: error.message });
  }
};

module.exports = {
  getAllStocks,
  getStockById,
  addStock,
  updateStock,
  deleteStock,
};
