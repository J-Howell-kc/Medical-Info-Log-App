const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const emergencyContactSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String, 
    trim: true,
  },
  address:{
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Must be a valid phone number']
  },
  relationship: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  timeTaken: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  createdBy: {
    type: String,
    required: true,
  },
});

module.exports = emergencyContactSchema;