const express = require('express');
const app = express();
const { calculateVWAP, getFrequencyDistribution, calculateFibonacci, calculateBollingerBands } = require('./indicatorService');

// Middleware to parse JSON request bodies
app.use(express.json());

// Webhook listener for Jira events
app.post('/webhook/jira', (req, res) => {
  const jiraEvent = req.body;
  console.log('Received Jira event:', jiraEvent);
  // Handle the event (e.g., update status, send notifications)
  res.status(200).send('Webhook received');
});

// API route to fetch stock indicators based on the ticker
app.get('/api/indicators/:ticker', async (req, res) => {
  const { ticker } = req.params;

  try {
    const vwap = await calculateVWAP(ticker);
    const frequency = await getFrequencyDistribution(ticker);
    const fibonacci = await calculateFibonacci(ticker);
    const bollinger = await calculateBollingerBands(ticker);

    res.json({ vwap, frequency, fibonacci, bollinger });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching stock data' });
  }
});

// Corrected app.listen
app.listen(5000, () => console.log('Server running on port 5000'));
