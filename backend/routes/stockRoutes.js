// src/routes/stockRoutes.js
const express = require('express');
const {
  getAllStocks,
  getStockById,
  addStock,
  updateStock,
  deleteStock
} = require('../controllers/stockController');

const router = express.Router();

// GET - Retrieve all stocks
router.get('/', getAllStocks);

// GET - Retrieve a specific stock by its ID
router.get('/:id', getStockById);

// POST - Create a new stock
router.post('/', addStock);

// PUT - Update an existing stock by its ID
router.put('/:id', updateStock);

// DELETE - Remove a stock by its ID
router.delete('/:id', deleteStock);

// Export the router to use in the main server file
module.exports = router;
