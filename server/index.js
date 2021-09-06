const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/build')));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});