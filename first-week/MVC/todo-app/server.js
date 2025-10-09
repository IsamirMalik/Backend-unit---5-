const express = require('express');
const fs = require('node:fs');
const todosRouter = require('./routes/todos.routes');

const app = express();
const PORT = 3030;

app.use(express.json());

// Test Route
app.get('/test', (req, res) => {
    res.send('Test route is working')
});

// Get all todos
app.use('/todos', todosRouter);



app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});