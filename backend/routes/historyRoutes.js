// src/routes/historyRoutes.js
const express = require('express');
const {
  getHistory,
  addHistory,
  deleteHistory,
} = require('../controllers/historyController'); // Check this import
const router = express.Router();

// GET - Get all history entries
router.get('/', getHistory);

// POST - Add a new history entry
router.post('/', addHistory);

// DELETE - Delete a history entry
router.delete('/:id', deleteHistory);

module.exports = router;
