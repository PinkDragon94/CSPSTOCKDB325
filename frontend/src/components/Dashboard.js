import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockChart from '../components/StockChart';


const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await axios.get('/api/your-stock-data-endpoint'); // Adjust this endpoint accordingly
      const formattedData = response.data.map(item => ({
        date: item.date,
        close: item.close,
        upperBand: item.bollingerBands.upper, // Example property
        lowerBand: item.bollingerBands.lower, // Example property
      }));
      setData(formattedData);
    };

    fetchStockData();
  }, []);

  return (
    <DashboardContainer>
      <h2>Stock Trends</h2>
      <StockChart data={data} />
    </DashboardContainer>
  );
};

export default Dashboard;

