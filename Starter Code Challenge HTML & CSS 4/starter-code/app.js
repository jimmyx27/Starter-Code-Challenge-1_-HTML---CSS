let express = require('express');
let app = express();

const absolutePath = __dirname + '/index.html';

app.get("/", (req, res) => {
  res.send(absolutePath);
}
