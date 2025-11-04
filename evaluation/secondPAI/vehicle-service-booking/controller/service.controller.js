const e = require('express');
const ServiceModel = require('../model/service.model');

const transporter = require('../utils/nodemailer');

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

    const info = await transporter.sendMail({
    from: '"Sameer Malik" <samirmalik591@gmail.com>',
    to: "venugopal.burli@masaischool.com , isamirmalik@gmail.com",
    subject: "Your Vehicle Service is Completed ✔",
    text: "Hello , Your Vehicle Service is Completed", // plain‑text body
    // html: "<b>Hello Sir!</b>", // HTML body
  });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" , error: error.message });
  }
};

module.exports = { bookService , completed };
