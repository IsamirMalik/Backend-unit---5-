const mongoose = require('mongoose');

let URL = 'mongodb://localhost:27017/library-management';
const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Successfully connected to the database');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
};

module.exports = connectDB;