const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// in-memory data store
//Create an array for the todo app task.
let todos = [];

// Middleware will handle users' requests.
app.use(bodyParser.json());

// Routes which will be used 
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  const newtask = { id: Date.now(), text };
  todos.push(newtask);
  res.json(newtask);
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
