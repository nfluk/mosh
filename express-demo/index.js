const express = require('express');
const app = express();

const courses = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Ruby' },
  { id: 3, name: 'Python' },
];

app.get('/', (req, res) => {
  // the cb in a get request is also called a 'route handler'
  res.status(200).send('Hello World!');
});

app.get('/api/courses', (req, res) => {
  res.status(200).send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) {
    res.status(404).send('Page not found');
  }
  res.status(200).send(course);
});

app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
