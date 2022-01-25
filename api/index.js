const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
const bodyParser = require("body-parser");

// place holder for the data
const messages = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/messages', (req, res) => {
  console.log('api/messages called!')
  res.json(messages);
});

app.post('/api/message', (req, res) => {
  const message = req.body.message;
  console.log('Adding message:::::', message);
  messages.push(message);
  res.json(message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});