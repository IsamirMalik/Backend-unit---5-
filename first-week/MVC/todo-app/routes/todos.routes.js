const express = require('express');
const todosRouter = express.Router();
const fs = require('node:fs');
const { getAllTodos , addTodo } = require('../controllers/todos.controller');

todosRouter.get('/all-todos', getAllTodos);
todosRouter.post('/add-todo', addTodo);

module.exports = todosRouter;
