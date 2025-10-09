const { getData , addOrUpdateTodos } = require('../models/todos.model');

const getAllTodos = (req , res) => {
    let { todos , data } = getData();
    res.json({ "All todos": todos  });
};

const addTodo = (req , res) => {
    let { todos , data } = getData();
    let newTodo = req.body;
    const lastTodo = todos[todos.length - 1];
    const newId = lastTodo ? lastTodo.id + 1 : 1;
    newTodo.id = newId;
    todos.push(newTodo);
    data.todos = todos;
    addOrUpdateTodos(data);
    res.status(201).json({ "message": "Todo added successfully", "todo": newTodo });
}

module.exports = { getAllTodos , addTodo }

