import React, { useEffect, useState } from 'react';
import { fetchIndicators } from '../components/API.js';

function TechnicalIndicators({ ticker }) {
  const [data, setData] = useState({
    vwap: null,
    frequency: [],
    fibonacci: [],
    bollinger: { upper: null, lower: null, middle: null },
  });
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true
        const result = await fetchIndicators(ticker);
        setData(result); // Update data state with the result
      } catch (err) {
        console.error('Error fetching technical indicators:', err);
        setError('Failed to load indicators.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    if (ticker) {
      fetchData();
    }
  }, [ticker]);

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state
  }

  return (
    <div>
      {data.vwap && <p>VWAP: {data.vwap}</p>}
      {data.frequency.length > 0 && (
        <p>Frequency Distribution: {JSON.stringify(data.frequency)}</p>
      )}
      {data.fibonacci.length > 0 && (
        <ul>
          <li>Fib Levels: {data.fibonacci.map((level, i) => <span key={i}>{level} </span>)}</li>
        </ul>
      )}
      {data.bollinger && (
        <ul>
          <li>Upper: {data.bollinger.upper}</li>
          <li>Lower: {data.bollinger.lower}</li>
          <li>Middle: {data.bollinger.middle}</li>
        </ul>
      )}
    </div>
  );
}

export default TechnicalIndicators;

