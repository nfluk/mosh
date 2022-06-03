const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // the cb in a get request is also called a 'route handler'
  res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
