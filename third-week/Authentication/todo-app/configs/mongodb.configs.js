const mongoose = require('mongoose');
var URL = process.env.MONGODB_URL;

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