const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;