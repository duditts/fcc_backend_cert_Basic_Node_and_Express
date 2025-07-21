require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');
let absolutePath = path.resolve(__dirname, 'views/index.html');

console.log("hello World");

//app.use('/', req ,res => {
//    res.send("Hello Express");
//});

//app.use(req ,res =>{
//    res.sendFile(absolutePath);
//});


















 module.exports = app;
