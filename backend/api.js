app.get('/api/indicators/:ticker', async (req, res) => {
    const { ticker } = req.params;
    const vwap = await calculateVWAP(ticker);
    const frequency = await getFrequencyDistribution(ticker);
    const fibonacci = await calculateFibonacci(ticker);
    const bollinger = await calculateBollingerBands(ticker);
    res.json({ vwap, frequency, fibonacci, bollinger });
  });
  