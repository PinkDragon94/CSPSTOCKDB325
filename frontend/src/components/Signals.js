// src/components/Signals.js
import React from 'react';

const Signals = ({ data }) => {
  // Example logic to determine buy/sell signals based on simple moving average (SMA)
  const generateSignals = () => {
    if (!data || !data.chartData) return null;

    const signals = [];
    const { chartData } = data;

    // Example: Simple logic based on previous closing prices
    for (let i = 1; i < chartData.length; i++) {
      const currentClose = chartData[i].closePrice;
      const previousClose = chartData[i - 1].closePrice;

      if (currentClose > previousClose) {
        signals.push({ date: chartData[i].date, signal: 'Buy' });
      } else if (currentClose < previousClose) {
        signals.push({ date: chartData[i].date, signal: 'Sell' });
      } else {
        signals.push({ date: chartData[i].date, signal: 'Hold' });
      }
    }

    return signals;
  };

  const signals = generateSignals();

  return (
    <div className="signals">
      <h3>Buy/Sell Signals</h3>
      {signals && signals.length > 0 ? (
        <ul>
          {signals.map((signal, index) => (
            <li key={index}>
              {signal.date}: {signal.signal}
            </li>
          ))}
        </ul>
      ) : (
        <p>No signals available.</p>
      )}
    </div>
  );
};

export default Signals;
