import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  // Ensure that we have valid data for the chart
  const vwap = data.vwap || 0; // Default to 0 if not available
  const fibonacci = data.fibonacci && data.fibonacci.length > 1 ? data.fibonacci[1] : 0; // Default to 0 if not available
  const bollingerUpper = data.bollinger && data.bollinger.upper ? data.bollinger.upper : 0; // Default to 0 if not available
  const frequency = data.frequency && data.frequency.length > 0 ? data.frequency[0] : 0; // Default to 0 if not available

  const chartData = {
    labels: ['VWAP', 'Fibonacci', 'Bollinger Bands', 'Frequency Distribution'],
    datasets: [
      {
        label: 'Stock Analysis',
        data: [vwap, fibonacci, bollingerUpper, frequency],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Stock Analysis Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;

