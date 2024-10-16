import axios from 'axios';
import StockTable from './StockTable';
import ChartComponent from './Chart';

const api_key = process.env.REACT_APP_API_KEY;

if (!api_key) {
    console.warn('API key is not defined. Please check your .env file.');
}

const instance = axios.create({
    baseURL: 'https://alpha-vantage.p.rapidapi.com/query',
    headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': api_key,
    },
});

const stockAPI = {
    // Fetch daily stock prices
    getDailyStockPrices: async (symbol) => {
        try {
            const response = await instance({
                method: 'GET',
                params: {
                    function: 'TIME_SERIES_DAILY_ADJUSTED',
                    symbol: symbol,
                    outputsize: 'compact',
                    datatype: 'json',
                },
            });

            const timeSeries = response.data['Time Series (Daily)'];

            if (!timeSeries) {
                throw new Error('No data found for the specified stock symbol.');
            }

            // Prepare the chart and table data
            const chartData = [];
            const tableData = [];

            Object.keys(timeSeries).forEach((date) => {
                const dailyData = {
                    date: date,
                    openPrice: Number(timeSeries[date]['1. open']),
                    closePrice: Number(timeSeries[date]['4. close']),
                    highPrice: Number(timeSeries[date]['2. high']),
                    lowPrice: Number(timeSeries[date]['3. low']),
                    volume: Number(timeSeries[date]['6. volume']),
                };

                chartData.push(dailyData);
                tableData.push(dailyData); // Use the same structure for table data
            });

            chartData.reverse();
            tableData.reverse();

            // Calculate VWAP
            const totalVolume = chartData.reduce((acc, day) => acc + day.volume, 0);
            const vwap = totalVolume > 0 ? chartData.reduce((acc, day) => acc + (day.closePrice * day.volume), 0) / totalVolume : 0;

            // Dummy Fibonacci calculation
            const fibonacci = chartData.length > 0 ? chartData[0].highPrice * 0.618 : 0;

            // Example Bollinger Bands upper
            const bollingerUpper = chartData.length > 0 ? chartData[0].highPrice + (chartData[0].highPrice * 0.1) : 0;

            return {
                ChartComponent, // Return the formatted chart data
                StockTable, // Return the formatted table data
                vwap, // Include calculated VWAP
                fibonacci, // Include calculated Fibonacci
                bollinger: { upper: bollingerUpper }, // Return Bollinger Bands as an object
                frequency: [] // Placeholder for frequency data
            };
        } catch (error) {
            console.error('Error fetching daily stock prices:', error);
            throw error;
        }
    },

    // Fetch technical indicators
    fetchIndicators: async (ticker) => {
        try {
            const response = await instance({
                method: 'GET',
                params: {
                    function: 'TECHNICAL_INDICATORS',
                    symbol: ticker,
                    interval: 'daily',
                    datatype: 'json',
                },
            });

            const indicators = response.data['Technical Analysis: SMA'];
            if (!indicators) {
                throw new Error('No indicators found for the specified stock symbol.');
            }

            return indicators;
        } catch (error) {
            console.error('Error fetching technical indicators:', error);
            throw error;
        }
    },
};

// Export the API functions
export const getDailyStockPrices = stockAPI.getDailyStockPrices;
export const fetchIndicators = stockAPI.fetchIndicators;

export default stockAPI;

