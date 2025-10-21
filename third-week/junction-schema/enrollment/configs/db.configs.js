const mongoose = require('mongoose');

const connetToDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/enrollment');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports =  connetToDb;