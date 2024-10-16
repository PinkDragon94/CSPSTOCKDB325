// import { ObjectId } from 'mongodb'
// import db from './db.js'
// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


app.use('/users', userRoutes);
app.use('/user', userRoutes);
app.use('/blog' ,userRoutes);
app.use('/comments', commentRoutes);
app.use('/stock', stockRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URI,)
  .then(() =>{
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}


)
  .catch(err => console.error(err,'mongodb connection error'));
