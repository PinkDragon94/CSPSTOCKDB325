import mongoose from 'mongoose';
import Blog from './models/Blog.js';
import dotenv from 'dotenv';
const Comment = require('./models/comment');
const User = require('./models/user');
dotenv.config();



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
    await Comment.deleteMany({});
    await User.deleteMany({});
 
    console.log('Existing data cleared!');

    // Users array
    const users = [
      { username: 'johnDoe', email: 'joeDoe@example.com', password: 'password123' },
      { username: 'janeSmith', email: 'q5h5h@example.com', password: 'password133' },
      { username: 'joeBloggs', email: 'joeh@example.com', password: 'password143' },
      { username: 'sarahJones', email: 'sarah@example.com', password: 'password223' },
      { username: 'bobDylan', email: 'bob@example.com', password: 'password113' },
      { username: 'jimmyPage', email: 'jimmy@example.com', password: 'password122' },
      { username: 'lisaMarie', email: 'liad@example.com', password: 'password126' },
      { username: 'lisaAnnMarie', email: 'ann@example.com', password: 'password125' },
      { username: 'johnJ', email: 'joeJ@example.com', password: 'password223' },
    ];
    const savedUsers = await User.insertMany(users);
    console.log('Users seeded:', savedUsers);

  

    // Comments array
    const comments = [
      { userId: savedUsers[0]._id, sneakerId: savedSneakers[6]._id, content: 'Love these shoes!' },
      { userId: savedUsers[1]._id, sneakerId: savedSneakers[0]._id, content: 'I love these shoes!' },
      { userId: savedUsers[2]._id, sneakerId: savedSneakers[5]._id, content: 'I really love these shoes!' },
      { userId: savedUsers[3]._id, sneakerId: savedSneakers[4]._id, content: 'I just love these shoes!' },
      { userId: savedUsers[4]._id, sneakerId: savedSneakers[1]._id, content: 'I love these shoes!' },
      { userId: savedUsers[5]._id, sneakerId: savedSneakers[2]._id, content: 'I really love these shoes!' },
      { userId: savedUsers[6]._id, sneakerId: savedSneakers[1]._id, content: 'I just love these shoes!' },
    ];
    const savedComments = await Comment.insertMany(comments);
    console.log('Comments seeded:', savedComments);

   

    // Close the MongoDB connection
    mongoose.connection.close();
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
    mongoose.connection.close();
  }
}

// Run seed function
seedDatabase();
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
