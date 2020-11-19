const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const orders = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/orders', (req, res) => {
  console.log('api/orders called!')
  res.json(orders);
});

app.post('/api/order', (req, res) => {
  const order = req.body.order;
  console.log('Adding order:::::', order);
  orders.push(order);
  res.json("order added");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});