// backend/scripts/loadData.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const Neighborhood = require('../models/Neighborhood');

dotenv.config();

async function loadData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const dataPath = path.join(__dirname, '../../data/neighborhoods.json');
    const neighborhoods = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    await Neighborhood.deleteMany({});
    await Neighborhood.insertMany(neighborhoods);

    console.log('Sample data inserted successfully.');
    process.exit();
  } catch (err) {
    console.error('Error loading data:', err);
    process.exit(1);
  }
}

loadData();
