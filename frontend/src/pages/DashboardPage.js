// src/pages/DashboardPage.js
import React, { useState, useEffect } from 'react';
import { getDailyStockPrices } from '../components/API'; // Correct API import
import ChartComponent from '../components/Chart';
import StockTicker from '../components/StockTicker';
import Footer from '../components/Footer';
import TechnicalIndicators from '../components/TechnicalIndicators';
import StockTable from '../components/StockTable';
import '../styles/DashboardPage.css';
import Signals from '../components/Signals'; // Assuming you have a Signals component

const DashboardPage = () => {
  const [stockData, setStockData] = useState(null);
  const [ticker, setTicker] = useState('AAPL'); // Default stock symbol
  const [loading, setLoading] = useState(true);

  // Fetch stock data based on the selected ticker
  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        const data = await getDailyStockPrices(ticker);
        console.log('Fetched stock data:', data);
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock analysis:', error);
        setStockData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [ticker]);

  const handleTickerChange = (newTicker) => {
    setTicker(newTicker);
  };

  const hasValidData = stockData && stockData.chartData && stockData.chartData.length > 0;

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

      <StockTicker onTickerChange={handleTickerChange} />

      <header className="hero">
        <h2>Dashboard</h2>
        <p>Analyze and track stock predictions effectively.</p>
      </header>

      {loading && <div>Loading...</div>}
      {!loading && !hasValidData && <div>No data available for the selected stock symbol.</div>}
      {hasValidData && (
        <>
          {/* ChartComponent */}
          <ChartComponent data={stockData} />

          {/* Stock Table */}
          <StockTable data={stockData.chartData} /> {/* Ensure chartData is passed to Table */}

          {/* Technical Indicators */}
          <TechnicalIndicators ticker={ticker} stockData={stockData} />

          {/* Signals Component */}
          <Signals data={stockData} /> {/* Assuming Signals component takes stock data */}
        </>
      )}

      <input 
        type="text" 
        value={ticker} 
        onChange={(e) => setTicker(e.target.value)} 
        placeholder="Enter stock symbol" 
      />
      <button onClick={() => setTicker(ticker)}>Fetch Stock Data</button>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
