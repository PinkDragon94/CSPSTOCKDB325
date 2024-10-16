// src/components/StockTicker.jsx
import React, { useState } from 'react';

const StockTicker = ({ onTickerChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      onTickerChange(inputValue); // Call the prop function to change ticker
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter stock ticker"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default StockTicker;
