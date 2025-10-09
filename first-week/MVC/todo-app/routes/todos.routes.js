const express = require('express');
const todosRouter = express.Router();
const fs = require('node:fs');
const { getAllTodos, addTodo, updateTodo, deleteTodo, searchTodo } = require('../controllers/todos.controller');

todosRouter.get('/all-todos', getAllTodos);
todosRouter.post('/add-todo', addTodo);
todosRouter.put('/update-todo/:id', updateTodo);
todosRouter.delete('/delete-todo/:id', deleteTodo);
todosRouter.get('/search-todo', searchTodo);

module.exports = todosRouter;
