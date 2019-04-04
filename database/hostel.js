const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hosteldb', {useNewUrlParser: true}, function(err) {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Connection to database was successfull");
  }
});

const hostelsSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  address: String,
  language: String,
  state: String,
  country: String
});

const Hostel = mongoose.model('Hostel', hostelsSchema, 'hostel');

//Find all
function findAll(callback) {
  Hostel.find(function(err, hostels) {
    callback(err, hostels);
  })
}

//Find one by name 
function findByName(name, callback) {
  Hostel.find({name: name}, function(err, hostels) {
    callback(err, hostels[0]);
  })
  
}

module.exports.Hostel = Hostel;

module.exports.findAll = findAll;
module.exports.findByName = findByName;
