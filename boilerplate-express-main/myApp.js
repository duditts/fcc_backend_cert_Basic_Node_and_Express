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
  res.json({ message: "Hello json" });
});
//app.use(express.static(path.join)(__dirname, 'public','style.css'));























 module.exports = app;
