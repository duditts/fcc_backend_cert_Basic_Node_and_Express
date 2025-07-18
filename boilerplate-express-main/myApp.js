let express = require('express');
let app = express();

console.log("hello World");
app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
























 module.exports = app;
