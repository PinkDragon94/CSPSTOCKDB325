import React from 'react';
import '../styles/DashboardCard.css';

const DashboardCard = ({ data }) => {
  return (
    <div className="dashboard-card">
      <h3>{data.title}</h3>
      <p className="value">{data.value}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default DashboardCard;
