const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/all-tasks', (req, res) => {
    res.send('Get all tasks')
});

module.exports = taskRouter;

