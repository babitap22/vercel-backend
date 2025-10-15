const express = require('express');
const route = require('./route/route');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/', route);

app.get('/', (req, res) => {
  res.send('Backend is running successfully');
});

// Export instead of listen (important for Vercel)
module.exports = app;
