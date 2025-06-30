const mongoose = require('mongoose');

const neighborhoodSchema = new mongoose.Schema({
  name: String,
  city: String,
  safety: Number,
  rent: Number,
  parks: Number,
  nightlife: Number,
  walkability: Number,
  schools: Number
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);
