// src/components/TechnicalIndicators.jsx
import React, { useEffect, useState } from 'react';
import { fetchIndicators } from '../components/API';

const TechnicalIndicators = ({ ticker, stockData }) => {
  const [indicators, setIndicators] = useState({
    vwap: null,
    frequency: [],
    fibonacci: [],
    bollinger: { upper: null, lower: null, middle: null },
  });
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch technical indicators when the ticker changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true
        const result = await fetchIndicators(ticker);
        setIndicators(result); // Update indicators state with the result
      } catch (err) {
        console.error('Error fetching technical indicators:', err);
        setError('Failed to load indicators.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    if (ticker) {
      fetchData();
    }
  }, [ticker]);

  // Function to calculate the moving average from stock data
  const movingAverage = (data) => {
    if (!data || data.length === 0) return 0; // Return 0 if no data is available
    return data.reduce((sum, day) => sum + day.close, 0) / data.length; // Example calculation
  };

  // Render loading and error states
  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state
  }

  return (
    <div>
      <h3>Technical Indicators for {ticker}</h3>

      {/* Display VWAP */}
      {indicators.vwap && <p>VWAP: {indicators.vwap}</p>}

      {/* Display Frequency Distribution */}
      {indicators.frequency.length > 0 && (
        <p>Frequency Distribution: {JSON.stringify(indicators.frequency)}</p>
      )}

      {/* Display Fibonacci Levels */}
      {indicators.fibonacci.length > 0 && (
        <ul>
          <li>Fib Levels: {indicators.fibonacci.map((level, i) => <span key={i}>{level} </span>)}</li>
        </ul>
      )}

      {/* Display Bollinger Bands */}
      {indicators.bollinger && (
        <ul>
          <li>Upper: {indicators.bollinger.upper}</li>
          <li>Lower: {indicators.bollinger.lower}</li>
          <li>Middle: {indicators.bollinger.middle}</li>
        </ul>
      )}

      {/* Display Moving Average */}
      <p>Moving Average: {movingAverage(stockData).toFixed(2)}</p>
    </div>
  );
};

export default TechnicalIndicators;
