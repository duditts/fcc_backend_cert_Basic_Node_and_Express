require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');
let absolutePath = path.resolve(__dirname, 'views/index.html');
express.static(__dirname + "/public");
console.log("hello World");

//app.get('/', (req ,res) => {
//    res.send("Hello Express");
//});

app.get('/',(req ,res) =>{
  res.sendFile(absolutePath);
});


















 module.exports = app;
