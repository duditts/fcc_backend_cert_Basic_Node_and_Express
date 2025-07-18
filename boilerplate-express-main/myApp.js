require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');

//console.log("hello World");
// app.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
//app.use(express.static(path.join(__dirname, 'public', 'style.css')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
  
});
app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
      }
  res.json({ message: message });
});
//app.use(express.static(path.join)(__dirname, 'public','style.css'));























 module.exports = app;
