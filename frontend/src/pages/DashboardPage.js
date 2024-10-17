// src/pages/DashboardPage.js
import React from 'react';
import Footer from '../components/Footer';
import StockTable from '../components/StockTable';
import DashboardCard from '../components/DashboardCard';
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

      <header className="hero">
        <h2>Dashboard</h2>
        <p>Analyze and track stock predictions effectively.</p>
      </header>

      {/* Dashboard cards component */}
      <DashboardCard />

      {/* StockTable component */}
      <StockTable />

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
