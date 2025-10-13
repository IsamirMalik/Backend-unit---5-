const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/orders';

const connectToDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToDb