let express = require('express');
let app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <script>
          console.log("Hello World");
        </script>
        <h1>Check the browser console</h1>
      </body>
    </html>
  `);
});































 module.exports = app;
