const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  // the cb in a get request is also called a 'route handler'
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Listening on port ${port} ...`));
