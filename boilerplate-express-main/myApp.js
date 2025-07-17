let express = require('express');
let app = express();

const PORT = process.env.PORT || 3030;

app.get("/", function(req, res) {
  res.send("Hello World");
});
app.listen(PORT,()=>{
console.log('Hello World');
}):

































 module.exports = app;
