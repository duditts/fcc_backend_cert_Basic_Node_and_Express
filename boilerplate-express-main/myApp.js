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
// app.get('/json', (req ,res) => {
//   res.json({"message": process.env.MESSAGE_STYLE == 'uppercase' 
//     ? "HELLO JSON" 
//     : "Hello json"});
// });
app.use((req, res, next) => {
  let {method, path, ip} = req;
  console.log(`${method} ${path} -: ${ip}`);
  next();
});
app.get('/',(req ,res) =>{
  res.sendFile(absolutePath);
});

console.log("hello World");
















 module.exports = app;
