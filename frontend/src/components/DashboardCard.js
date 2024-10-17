// src/components/DashboardCards.js
import React from 'react';
import '../styles/DashboardCard.css'; // Ensure you create corresponding styles

const DashboardCard = () => {
  // Dummy data for illustration
  const cardData = [
    { title: 'Total Stocks', value: 50, description: 'Active stocks being tracked' },
    { title: 'Predictions Made', value: 120, description: 'Stock price predictions' },
    { title: 'Watchlist', value: 10, description: 'Stocks on your watchlist' },
    { title: 'Portfolio Value', value: '$10,500', description: 'Total portfolio value' },
  ];

  return (
    <div className="dashboard-cards">
      {cardData.map((card, index) => (
        <div key={index} className="dashboard-card">
          <h3>{card.title}</h3>
          <p className="card-value">{card.value}</p>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
