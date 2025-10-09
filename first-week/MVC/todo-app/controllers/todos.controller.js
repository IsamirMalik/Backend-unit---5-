const { strictEqual } = require('assert');
const { getData, addOrUpdateTodos } = require('../models/todos.model');
const todosRouter = require('../routes/todos.routes');

const getAllTodos = (req, res) => {
    let { todos, data } = getData();
    res.json({ "All todos": todos });
};

const addTodo = (req, res) => {
    let { todos, data } = getData();
    let newTodo = req.body;
    const lastTodo = todos[todos.length - 1];
    const newId = lastTodo ? lastTodo.id + 1 : 1;
    newTodo.id = newId;
    todos.push(newTodo);
    data.todos = todos;
    addOrUpdateTodos(data);
    res.status(201).json({ "message": "Todo added successfully", "todo": newTodo });
};

const updateTodo = (req, res) => {
    let { todos, data } = getData();
    const todoId = req.params.id;

    const todoIndex = todos.findIndex((todo) => todo.id == todoId);

    if (todoIndex === -1) {

        res.status(404).json({ "message": "Todo not found" });
    } else {
        let updatedTodos = todos.map((todo) => {

            if (todo.id == todoId) {
                return { ...todo, ...req.body };
            }
            return todo;
        });
        data.todos = updatedTodos;
        
    }
    addOrUpdateTodos(data);
    res.status(200).json({ "message": "Todo updated successfully" , todos : todos});
};

const deleteTodo = (req, res) => {
    let { todos, data } = getData();
    const todoId = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id == todoId);
    if (todoIndex === -1) {
        res.status(404).json({ "message": "Todo not found" });
    } else {
        let updatedTodos = todos.filter((todo) => todo.id != todoId);
        data.todos = updatedTodos;
    }
    addOrUpdateTodos(data);
    res.status(200).json({ "message": "Todo deleted successfully" , todos : todos});
};

const searchTodo = (req, res) => {

    let { todos , data } = getData();
    let  title  = req.query.title.toLowerCase();

    let filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(title));

    if(filteredTodos.length == 0){
        res.status(404).json({ "message": "Todo not found" });
    }else{
    res.status(200).json({ "message": "Todo found successfully" , todos : filteredTodos});
    }

};

module.exports = { getAllTodos, addTodo, updateTodo, deleteTodo, searchTodo };

