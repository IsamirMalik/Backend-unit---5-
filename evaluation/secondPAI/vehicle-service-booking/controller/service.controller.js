const e = require('express');
const ServiceModel = require('../model/service.model');
const nodeMailer = require('nodemailer');

const bookService = async (req , res) => {

  let costs = {
    basic : 1000,
    premium : 2000,
    full : 3000
  };
  // res.send('Service Booked')

  try {
    const {  vehicleModel , serviceType , bookingDate } = req.body;

    let service = await ServiceModel.create({  vehicleModel , serviceType , bookingDate , cost : costs[serviceType] });
    res.status(200).json({ message: "Service Booked" , serviceId : service._id });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" , error: error.message });
  }
  
};

const completed = async (req , res) => {
  try {
    const { serviceId } = req.body;
    let service = await ServiceModel.findOneAndUpdate({ _id : serviceId } , { status : 'completed' });
    res.status(200).json({ message: "Service Completed" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" , error: error.message });
  }
};

module.exports = { bookService , completed };
