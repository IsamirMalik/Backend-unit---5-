const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  userId : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vehicleModel : { type: String, required: true },
  serviceType : { type: String, required: true , enum : [ 'basic' , 'premium' , 'full'] },
  bookingDate : { type: String, required: true },
  cost : { type: Number },
  status : { type: String, enum : ['booked' , 'completed'], default : 'booked' },
  createdAt : {
    type: Date,
    default: Date.now
  }
});

const ServiceModel = mongoose.model('Service', ServiceSchema);
module.exports = ServiceModel;