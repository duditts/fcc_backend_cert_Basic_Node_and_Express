let express = require('express');
let app = express();
let path = require('path');

//console.log("hello World");
// app.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
  
});
//app.use(express.static(path.join)(__dirname, 'public','style.css'));
app.use(express.static(path.join(__dirname, 'public')));






















 module.exports = app;
