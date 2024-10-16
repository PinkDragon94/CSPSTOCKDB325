import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  // Check if the required data exists before rendering
  if (!data || !data.chartData || !data.vwap || !data.bollinger) {
    return <div>No data available for chart</div>;
  }

  const { chartData, vwap, fibonacci, bollinger } = data;

  // Extract labels (dates) and close prices from chartData
  const chartLabels = chartData.map(entry => entry.date);
  const closePrices = chartData.map(entry => entry.closePrice);

  // Chart.js options configuration
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Stock Price with Indicators',
      },
    },
    scales: {
      x: {
        type: 'time', // Use time scale for the x-axis to handle dates
        time: {
          unit: 'day', // Display by day
        },
      },
      y: {
        beginAtZero: false, // Prices don't usually start at zero
      },
    },
  };

  return (
    <div>
      <h3>Stock Prices Chart</h3>
      <Line
        data={{
          labels: chartLabels, // Dates for the x-axis
          datasets: [
            {
              label: 'Close Prices',
              data: closePrices, // Close prices for the y-axis
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            },
            {
              label: 'VWAP',
              data: chartData.map(entry => entry.vwap), // VWAP per day
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              borderDash: [5, 5], // Dashed line for VWAP
              fill: false,
            },
            {
              label: 'Bollinger Upper Band',
              data: chartData.map(entry => entry.bollingerUpper), // Upper Bollinger Band
              borderColor: 'rgba(255, 205, 86, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Bollinger Lower Band',
              data: chartData.map(entry => entry.bollingerLower), // Lower Bollinger Band
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false,
            },
            // Optionally add Fibonacci retracement dataset
            {
              label: 'Fibonacci Retracement',
              data: Array(chartData.length).fill(fibonacci), // Static value for simplicity, if needed
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: false,
              borderDash: [10, 5], // Dashed line for Fibonacci
            },
          ],
        }}
        options={chartOptions}
      />
      <div>
        <p>VWAP: {vwap}</p>
        <p>Fibonacci Level: {fibonacci}</p>
        <p>Bollinger Upper Band: {bollinger.upper}</p>
        <p>Bollinger Lower Band: {bollinger.lower}</p>
      </div>
    </div>
  );
};

export default ChartComponent;
