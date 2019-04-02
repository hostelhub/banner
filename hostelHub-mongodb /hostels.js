const mongoose = require('mongoose');
const db = require('./index.js');


const hostelsSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  address: String,
  language: String,
  state: String,
  country: String
});

const Hostels = mongoose.model('Hostels', hostelsSchema);

module.exports = Hostels; 