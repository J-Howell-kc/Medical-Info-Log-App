const { Schema, model } = require('mongoose');

const emergencyContactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String, 
    required: true,
    trim: true,
  },
  address:{
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    unique: true,
    match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Must be a valid phone number']
  },
  relationship: {
    type: String,
    required: true,
    trim: true,
  },
});
const emergencyContact = model('emergencyContact', emergencyContactSchema);

module.exports = emergencyContact;