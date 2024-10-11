import mongoose from 'mongoose';
import Blog from './models/Blog.js';
import dotenv from 'dotenv';

dotenv.config();

const blogs = [
  {
    title: 'Investing 101',
    image: 'https://example.com/image1.jpg',
    summary: 'Learn the basics of investing in the stock market.',
    link: 'https://example.com/investing-101',
  },
  {
    title: 'Top 10 Stocks to Watch',
    image: 'https://example.com/image2.jpg',
    summary: 'Discover the top stocks that analysts recommend.',
    link: 'https://example.com/top-stocks',
  },
];

const seedBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log('Seed data inserted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedBlogs();
