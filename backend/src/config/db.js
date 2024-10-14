import { MongoClient } from 'mongodb';
import "dotenv/config";

// MongoDB native connection
const connection = process.env.DB_URI;

let db;
const connectDB = async () => {
  try {
    const client = new MongoClient(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db("sneaker-app"); // Database reference
    console.log("MongoDB connected using MongoClient");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit process if connection fails
  }
};

export { connectDB, db }; // Named exports for both connectDB and db

