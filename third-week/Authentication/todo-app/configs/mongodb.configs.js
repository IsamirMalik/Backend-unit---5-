const mongoose = require('mongoose');
var URL = 'mongodb://127.0.0.1:27017/todo-app';

const connectToDb = async () => {
    try {
        if(!URL){
            throw new Error('MONGODB_URL is not defined');
        }
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Failed to connect to MongoDB');
    }
};

module.exports = connectToDb;