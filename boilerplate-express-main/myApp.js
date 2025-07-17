let express = require('express');
let app = express();

app.get("/", (req, res) => {
  console.log("A request was made to /");
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






























 module.exports = app;
