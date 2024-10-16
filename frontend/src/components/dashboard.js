import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; // Assuming you're using react-chartjs-2

const api_key = process.env.REACT_APP_API_KEY;

if (!api_key) {
  console.warn('API key is not defined. Please check your .env file.');
}

// Main Dashboard Component
const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStockData = async (symbol) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios({
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
          'x-rapidapi-key': api_key,
        },
        params: {
          function: 'TIME_SERIES_DAILY_ADJUSTED',
          symbol: symbol,
          outputsize: 'compact',
          datatype: 'json',
        },
      });

      const timeSeries = response.data['Time Series (Daily)'];

      if (!timeSeries) {
        throw new Error('No data found for the specified stock symbol.');
      }

      // Prepare the chart and table data
      const chartData = [];
      let totalVolume = 0;
      let totalWeightedPrice = 0;

      Object.keys(timeSeries).forEach((date) => {
        const dailyData = {
          date: date,
          openPrice: Number(timeSeries[date]['1. open']),
          closePrice: Number(timeSeries[date]['4. close']),
          highPrice: Number(timeSeries[date]['2. high']),
          lowPrice: Number(timeSeries[date]['3. low']),
          volume: Number(timeSeries[date]['6. volume']),
        };

        chartData.push(dailyData);
        totalVolume += dailyData.volume;
        totalWeightedPrice += dailyData.closePrice * dailyData.volume;
      });

      chartData.reverse();

      // Calculate VWAP (Volume Weighted Average Price)
      const vwap = totalVolume > 0 ? totalWeightedPrice / totalVolume : 0;

      // Dummy Fibonacci calculation (using the highest price in the dataset)
      const highPrice = Math.max(...chartData.map(day => day.highPrice));
      const fibonacci = highPrice * 0.618; // Example Fibonacci retracement level

      // Bollinger Bands Calculation
      const movingAveragePeriod = 20;
      const closePrices = chartData.map(day => day.closePrice);
      const movingAverage = closePrices.slice(0, movingAveragePeriod).reduce((acc, val) => acc + val, 0) / movingAveragePeriod;

      const variance = closePrices.slice(0, movingAveragePeriod).reduce((acc, val) => acc + Math.pow(val - movingAverage, 2), 0) / movingAveragePeriod;
      const stdDev = Math.sqrt(variance);

      const bollingerUpper = movingAverage + 2 * stdDev;
      const bollingerLower = movingAverage - 2 * stdDev;

      // Set all the computed data
      setData({
        chartData,
        vwap,
        fibonacci,
        bollinger: { upper: bollingerUpper, lower: bollingerLower },
      });
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStockData(ticker);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter stock ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
      </form>

      {error && <p>{error}</p>}

      {data && (
        <div>
          <h2>Stock Data for {ticker}</h2>
          {/* Display the Chart */}
          <Line
            data={{
              labels: data.chartData.map(day => day.date),
              datasets: [
                {
                  label: 'Close Price',
                  data: data.chartData.map(day => day.closePrice),
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  fill: true,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  type: 'time',
                  time: {
                    unit: 'day',
                  },
                },
              },
            }}
          />

          {/* Display VWAP, Fibonacci, Bollinger */}
          <div>
            <h3>Technical Indicators</h3>
            <p>VWAP: {data.vwap.toFixed(2)}</p>
            <p>Fibonacci Level: {data.fibonacci.toFixed(2)}</p>
            <p>
              Bollinger Bands:
              <br />
              Upper: {data.bollinger.upper.toFixed(2)}
              <br />
              Lower: {data.bollinger.lower.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
