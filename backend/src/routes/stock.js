const express = require('express');
const { analyzeStock } = require('../controllers/stockController');

const router = express.Router();

// Stock analysis route
router.post('/analyze', analyzeStock);

module.exports = router;
