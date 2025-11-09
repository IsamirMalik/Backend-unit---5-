const mongoose = require('mongoose');
const { title } = require('process');

const notifiactionSchema = new mongoose.Schema({
  recipient: {
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
  title: {
    type: String,
    required: true    
  },
  incidnet : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Incident',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  priority : {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['unread', 'read'],
    default: 'unread'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Notification = mongoose.model('Notification', notifiactionSchema);

module.exports = Notification;