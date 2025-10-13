const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/task-management';

const connectToDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to database', error);
    }
}

const librarySchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    dueDate: { type: Date, required: true }

});

const Library = mongoose.model('Task', taskSchema);

module.exports = { connectToDb , Library };