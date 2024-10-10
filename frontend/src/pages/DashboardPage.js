import React from 'react';
import DashboardCard from '../components/DashboardCard';
import StockTicker from '../components/StockTicker'; // Import the ticker
import Footer from '../components/Footer';
import '../styles/DashboardPage.css'; 

const DashboardPage = () => {
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
      <StockTicker /> {/* Add the stock ticker here */}
      <header className="hero">
        <h2>Dashboard</h2>
        <p>Analyze and track stock predictions effectively.</p>
      </header>
      <div className="dashboard-cards">
        {data.map((item) => (
          <DashboardCard key={item.id} data={item} />
        ))}
      </div>
        {/* Add Footer component */}
        <Footer />
    </div>  // Close the outer div
  );
};

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

