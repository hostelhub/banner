// Populate a mongo db database with some mock data.
const mongoose = require('mongoose');
const hostel = require('./hostel.js');

const palmSpringHostel = new hostel.Hostel({
  name: 'Palm-Springs',
  imageUrl: 'https://s3.amazonaws.com/hostel-hub-image-data/house-image/garden-house.jpg',
  address: '640 Tamanind Ave, West Palm Beach, FLorida, 34034',
  language: 'EN',
  state: 'Florida',
  country: 'USA'
});

palmSpringHostel.save().then(() => console.log('element saved successfully'));

const treeHouse = new hostel.Hostel({
  name: 'Tree-House',
  imageUrl: 'https://s3.amazonaws.com/hostel-hub-image-data/house-image/Tree-Plans-House.jpg',
  address: '123 Tree St, Sacramento, CA 95432',
  language: 'EN',
  state: 'California',
  country: 'USA'
});

treeHouse.save().then(() => console.log('element saved successfully'));


const floatingHouse = new hostel.Hostel({
  name: 'Floating-House',
  imageUrl: 'https://s3.amazonaws.com/hostel-hub-image-data/house-image/Floating-House-a-mobile-house-in-the-middle-of-a-lake-14.jpg',
  address: '123 Tree St, Sacramento, CA 95432',
  language: 'EN',
  state: 'California',
  country: 'USA'
});

treeHouse.save().then(() => console.log('element saved successfully'));
