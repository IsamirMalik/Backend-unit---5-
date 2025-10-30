const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type:String},
    status: { type: Boolean, default:   false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } 
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;