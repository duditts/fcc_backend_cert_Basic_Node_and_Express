require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');
let absolutePath = path.resolve(__dirname, 'views/index.html');
//app.use(express.static(__dirname + "/public"))
app.use('/public', express.static(__dirname + '/public'));
//app.get('/', (req ,res) => {
//    res.send("Hello Express");
//});
app.get('/json', (req ,res) => {
    res.json({"message": "Hello json"});
});
app.get('/',(req ,res) =>{
  res.sendFile(absolutePath);
});

console.log("hello World");
















 module.exports = app;
