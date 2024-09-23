const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/players'); // Make sure this file exists

const app = express();
const port = 3000;
  
// Middleware
app.use(express.json()); // To parse JSON bodies
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/players', playerRoutes);

// Connect to local MongoDB instance
mongoose
  .connect("mongodb://localhost:27017/players")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port " + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));
