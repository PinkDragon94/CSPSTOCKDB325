const axios = require('axios');
const { createJiraIssue } = require('../services/jiraService');

// Analyze stock (fetch data from Alpha Vantage)
const analyzeStock = async (req, res) => {
  const { ticker } = req.body;

  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=YOUR_API_KEY`);
    const stockData = response.data;

    // Perform analysis like VWAP, Fibonacci, Bollinger Bands, etc.
    const analyzedData = performTechnicalAnalysis(stockData);

    // Automatically create a Jira task if any red flags (e.g., risk detected)
    if (analyzedData.risk) {
      await createJiraIssue(`Risk Detected for ${ticker}`, JSON.stringify(analyzedData));
    }

    res.json(analyzedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze stock' });
  }
};

// Example of technical analysis methods (for simplicity)
const performTechnicalAnalysis = (stockData) => {
  // Dummy analysis example
  return {
    vwap: 100,
    fibonacci: [0, 23.6, 38.2, 50, 61.8, 100],
    bollingerBands: { upper: 150, lower: 80 },
    frequencyDistribution: [10, 20, 30],
    risk: false
  };
};

module.exports = { analyzeStock };
