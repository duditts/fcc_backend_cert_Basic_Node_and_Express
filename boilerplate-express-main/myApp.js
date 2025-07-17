let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
  res.send("Hello Express");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});



































 module.exports = app;
