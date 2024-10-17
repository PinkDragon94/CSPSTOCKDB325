// import { ObjectId } from 'mongodb'
// import db from './db.js'
// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const historyRoutes = require('./routes/history');
const stockRoutes = require('./routes/stocks');
const commentRoutes = require('./routes/comments');
const predictionRoutes = require('./routes/predictions');
const watchlistRoutes = require('./routes/watchlist');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/history', historyRoutes);
app.use('/comments', commentRoutes);
app.use('/stocks', stockRoutes);
app.use('/predictions', predictionRoutes);
app.use('/watchlist', watchlistRoutes);


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URI,)
  .then(() =>{
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}


)
  .catch(err => console.error(err,'mongodb connection error'));