const mongoose = require('mongoose');
const { validate } = require('./user.model');
const path = require('path');

const incidentSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum : [
      'accident',
      'fire',
      'medical',
      'natural_disaster',
      'suspicious_activity',
      'weather_alert',
      'other'
    ]
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
      // validate: {
      //   validator: function (v) {
      //     return v.length === 2 && v[0] >= -180 && v[0] <= 180 && v[1] >= -90 && v[1] <= 90;
      //   },
      //   message: 'Coordinates must be [longitude, latitude]',
      // },
    },
    address : {
      type: String,
    }
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  },
  status: {
    type: String,
    enum: ['verified', 'in progress', 'resolved' , 'false_alarm'],
    default: 'reported'
  },
  attachment:[
    {
      filename : String,
      path : String,
      mimetype : String,
    }
  ],
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  resolvedAt: {
    type: Date
  },
  
});

const Incident = mongoose.model('Incident', userSchema)
module.exports = Incident;