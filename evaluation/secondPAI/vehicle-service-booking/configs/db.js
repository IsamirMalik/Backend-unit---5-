const mongoose = require('mongoose');


const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/vehicle-service-booking';
const connectToDb = async () => {
  
  try {
    await mongoose.connect('mongodb://localhost:27017/vehicle-service-booking');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }

};

module.exports = connectToDb;