const mongoose = require('mongoose');
const History = require('./models/History'); // Update the path to your models
const Prediction = require('./models/Prediction'); // Ensure correct import
const Stock = require('./models/Stock'); // Ensure correct import
const Watchlist = require('./models/Watchlist');
const User = require('./models/User');


require('dotenv').config();

async function seedDatabase() {
  try {
    console.log(process.env.DB_URI);
    // Connecting to MongoDB
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Clearing the collections before seeding
    await History.deleteMany({});
    await Prediction.deleteMany({});
    await Stock.deleteMany({});
    await Watchlist.deleteMany({});
    
    console.log('Existing data cleared!');

    // Sample user and stock data to seed
     // Fetch existing users, or you can create them if needed
    const stocks = await Stock.find({}); // Fetch existing stocks, or create them if needed

     // Users array
     const users = [
      { username: 'johnsoe', email: 'joesoe@example.com', password: 'password123' },
      { username: 'janeSmithy', email: 'q5h5dh@example.com', password: 'password133' },
      { username: 'joeBlogg', email: 'joe1h@example.com', password: 'password143' },
      { username: 'sarahJone', email: 'sardah@example.com', password: 'password223' },
      { username: 'bobDylans', email: 'bdob@example.com', password: 'password113' },
      { username: 'jimmyPages', email: 'jidmmy@example.com', password: 'password122' },
      { username: 'lisaMariey', email: 'liadd@example.com', password: 'password126' },
      { username: 'lisaAnnMariTe', email: 'annq5h5dh@example.com', password: 'password125' },
      { username: 'johnJblack', email: 'joeJs@example.com', password: 'password223' },
    ];
    const savedUsers = await User.insertMany(users);
    console.log('Users seeded:', savedUsers);

    // Seed history data
    const historyData = [
      { user: users[0], stock: stocks[0], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() }, 
      { user: users[1], stock: stocks[1], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[2], stock: stocks[2], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[3], stock: stocks[3], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[4], stock: stocks[4], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[5], stock: stocks[5], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[6], stock: stocks[6], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[7], stock: stocks[7], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      { user: users[8], stock: stocks[8], action: 'sell', quantity: 50, price: 100, transactionDate: new Date() },
      // Add more records as needed
    ];

    const savedHistory = await History.insertMany(historyData);
    console.log('History seeded:', savedHistory);

    // Seed prediction data
    const predictionData = [
      { stock: stocks[0], user: users[0], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[1], user: users[1], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[2], user: users[2], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[3], user: users[3], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[4], user: users[4], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[5], user: users[5], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[6], user: users[6], predictionValue: 155, predictionDate: new Date() },
      { stock: stocks[7], user: users[7], predictionValue: 155, predictionDate: new Date() },
      // Add more records as needed
    ];

    const savedPredictions = await Prediction.insertMany(predictionData);
    console.log('Prediction seeded:', savedPredictions);

    // Seed stock data
    const stockData = [
      { companyName: 'Apple Inc.', symbol: 'AAPL', price: 150 },
      { companyName: 'Alphabet Inc.', symbol: 'GOOGL', price: 2800 },
      { companyName: 'Microsoft Corp.', symbol: 'MSFT', price: 200 },
      { companyName: 'Facebook Inc.', symbol: 'FB', price: 300 },
      { companyName: 'Google Inc.', symbol: 'GOOG', price: 2500 },
      { companyName: 'Amazon.com Inc.', symbol: 'AMZN', price: 1800 },
      { companyName: 'Tesla Inc.', symbol: 'TSLA', price: 1600 },
      { companyName: 'NVIDIA Corp.', symbol: 'NVDA', price: 900 },
      // Add more records as needed
    ];

    const savedStocks = await Stock.insertMany(stockData);
    console.log('Stock seeded:', savedStocks);

    // Seed watchlist data
    const watchlistData = [
      { user: users[0], stocks: [stocks[0], stocks[1]] },
      { user: users[1], stocks: [stocks[0], stocks[1]] },
      { user: users[2], stocks: [stocks[0], stocks[1]] },
      { user: users[3], stocks: [stocks[0], stocks[1]] },
      { user: users[4], stocks: [stocks[0], stocks[1]] },
      { user: users[5], stocks: [stocks[0], stocks[1]] },
      { user: users[6], stocks: [stocks[0], stocks[1]] },
      { user: users[7], stocks: [stocks[0], stocks[1]] },
      
     
      // Add more records as needed
    ];

    const savedWatchlist = await Watchlist.insertMany(watchlistData);
    console.log('Watchlist seeded:', savedWatchlist);

    // Close the MongoDB connection
    await mongoose.connection.close();
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
    await mongoose.connection.close();
  }
}

// Run seed function
seedDatabase();
