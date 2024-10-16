import React from 'react';

const StockTableBody = ({ setSelectedTicker }) => {
  const stocks = [
    { ticker: 'AAPL', name: 'Apple Inc.' },
    { ticker: 'GOOGL', name: 'Alphabet Inc.' },
    { ticker: 'MSFT', name: 'Microsoft Corp.' },
    // Add more stocks as needed
  ];

  return (
    <tbody>
      {stocks.map(stock => (
        <tr key={stock.ticker} onClick={() => setSelectedTicker(stock.ticker)}>
          <td style={{ border: '1px solid black', padding: '8px' }}>{stock.ticker}</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>{stock.name}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default StockTableBody;
