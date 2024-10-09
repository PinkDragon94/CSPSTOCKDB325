import React from 'react';
import '../styles/StockTicker.css';

const StockTicker = () => {
  const stocks = [
    { ticker: 'AAPL', price: '$150.00' },
    { ticker: 'GOOGL', price: '$2,800.00' },
    { ticker: 'AMZN', price: '$3,300.00' },
    { ticker: 'MSFT', price: '$299.00' },
    { ticker: 'TSLA', price: '$700.00' },
  ];

  return (
    <div className="stock-ticker">
      <div className="ticker-content">
        {stocks.map((stock, index) => (
          <div key={index} className="stock-item">
            <span className="ticker-ticker">{stock.ticker}</span>: 
            <span className="ticker-price">{stock.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
