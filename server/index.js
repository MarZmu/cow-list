const express = require('express');
const path = require('path');
const cowDB = require('../database/index.js');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/cows', (req, res) => {

  cowDB.select((err, result) => {
    if (err) {
      alert("Error trying to pull existing data");
    } else {
      res.writeHead(200;
      res.send(1))
    }
  });
  res.writeHead(500);
  res.send(-1);

})

app.post('/cows', (req, res) => {

  var cowObj = { name: req.query.name, desc: req.query.desc };
//SENDING THE NAME AND DESCRIPTION TO DATABASE
  //ERROR--ALERT - (-1)
  //SUCCESS--SEND SIGNAL TO UPDATE LIST - (1)
  cowDB.insert(cowObj, (err, result) => {
    if (err) {
      alert('Error during attemp to post to DB');
    }
    else {
      alert('Added cow to DB');
      res.writeHead(201);
      res.send(result);
    }
  });
  res.writeHead(500);
  res.send(-1);

})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
