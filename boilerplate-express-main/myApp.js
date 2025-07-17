let express = require('express');
let app = express();

const PORT = process.env.PORT || 3030;

app.get("/", function (req, res) {
  console.log('Hello World');
  res.send('Hello Express');
});
































 module.exports = app;
