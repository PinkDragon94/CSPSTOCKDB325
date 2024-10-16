// src/components/StockTable.jsx
import React, { useState } from 'react';
import stockAPI from './API'; // Ensure correct import path

const StockTable = ({ onDataChange }) => {
  const [ticker, setTicker] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setMessage(''); // Reset message on new fetch

    try {
      const response = await stockAPI.getDailyStockPrices(ticker);
      console.log('Fetched data:', response); // Log the fetched data
      onDataChange(response); // Call the prop function with the fetched data
    } catch (error) {
      setMessage(`Error fetching stock data: ${error.message}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Enter stock ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        {message && <p>{message}</p>} {/* Display error messages */}
      </form>
    </div>
  );
};

export default StockTable;
