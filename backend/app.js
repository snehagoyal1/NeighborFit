// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();

// Routes
const matchRoutes = require('./routes/matchRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/match', matchRoutes);

module.exports = app;
