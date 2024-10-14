import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardCard from '../components/DashboardCard';
import ChartComponent from '../components/ChartComponent';
import StockTicker from '../components/StockTicker';
import Footer from '../components/Footer';
import '../styles/DashboardPage.css';
import TechnicalIndicators from '../components/TechnicalIndicators';

const DashboardPage = () => {
  const [stockData, setStockData] = useState(null);
  const [ticker, setTicker] = useState('AAPL'); // Default ticker

  // Function to analyze stock
  const analyzeStock = async (ticker) => {
    try {
      const response = await axios.post('http://localhost:5000/api/stocks/analyze', { ticker });
      setStockData(response.data);
    } catch (error) {
      console.error('Error fetching stock analysis', error);
    }
  };

  // Fetch data when ticker changes
  useEffect(() => {
    if (ticker) {
      analyzeStock(ticker); // Analyze the stock based on the ticker
    }
  }, [ticker]);

  // Handle input change for stock ticker
  const handleTickerChange = (e) => {
    setTicker(e.target.value); // Update the ticker state
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h1>Stock Predictions Dashboard</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>

      {/* Stock Ticker */}
      <StockTicker />

      <header className="hero">
        <h2>Dashboard</h2>
        <p>Analyze and track stock predictions effectively.</p>
      </header>

      {/* Input field for stock ticker */}
      <div className="ticker-input">
        <input 
          type="text" 
          placeholder="Enter Stock Ticker" 
          value={ticker} 
          onChange={handleTickerChange} 
        />
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        {data.map((item) => (
          <DashboardCard key={item.id} data={item} />
        ))}
      </div>

      {/* Stock Analysis Chart */}
      {stockData && (
        <div className="chart-section">
          <h2>Stock Analysis for {ticker}</h2>
          <ChartComponent data={stockData} />
        </div>
      )}

      {/* Technical Indicators */}
      <TechnicalIndicators ticker={ticker} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Static Data for Dashboard Cards
const data = [
  {
    id: 1,
    title: 'Total Stocks Tracked',
    value: '150',
    description: 'Number of stocks you are currently tracking.',
  },
  {
    id: 2,
    title: 'Predicted Growth',
    value: '12%',
    description: 'Expected growth of tracked stocks based on predictions.',
  },
  {
    id: 3,
    title: 'Market Overview',
    value: 'Bullish',
    description: 'Current market trend for your stocks.',
  },
  {
    id: 4,
    title: 'Total Investment',
    value: '$10,000',
    description: 'Total amount invested in tracked stocks.',
  },
];

export default DashboardPage;

