const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const hostel = require('../database/hostel.js');
// const mongoose = require('../database/index.js');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/hostels', function(req, res) {
  console.log("Request made to /api/hostels");
  hostel.findAll(function(err, hostels) {
    if (err) {
      res.send(err);
    } else {
      res.send(hostels);
    }
  })
});

app.get('/api/hostel/:name', function(req, res) {
  console.log("Request made to /api/hostel/:name");
    hostel.findByName(req.params.name, function(err, hostel) {
      if (err) {
        res.send(err);
      } else {
        res.send(hostel);
      }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))




