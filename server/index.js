const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Hostels = require('../database/index.js');
const mongoose = require('../database/index.js');


const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/hostels', function(req, res) {
  Hostels.find(function(err, hostels) {
    res.send(hostels);
  })
});