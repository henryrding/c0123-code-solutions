import express from 'express';

const app = express();
//  Middleware only used by routes below this. It won't do anything if body is
//  not JSON or if there is no body
app.use(express.json());
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).json(req.body);
  nextId++;
});

// Not sure which is better between adding id property to and sending req.body or grades[nextId]
// app.post('/api/grades', (req, res) => {
//   grades[nextId] = req.body;
//   grades[nextId].id = nextId;
//   res.status(201).json(grades[nextId]);
//   nextId++;
// });

app.listen(8080, () => console.log('Express server is listening on port 8080.'));
