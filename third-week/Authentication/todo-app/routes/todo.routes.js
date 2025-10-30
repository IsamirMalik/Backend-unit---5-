const express = require('express');
const TodoRouter = express.Router();
const TodoModel = require('../models/todo.model');
const authMiddleware = require('../middlewares/auth.middleware');


TodoRouter.post('/add-todo', authMiddleware , async (req, res) => {
    try {
        
        let todo = await TodoModel.create({...req.body , userId : req.user});
        res.status(200).json({ message: "Todo Added", todo });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
})

module.exports = TodoRouter;