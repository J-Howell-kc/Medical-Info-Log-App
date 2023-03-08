const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bioSchema = new Schema({

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
DOB: {
    type: String,
    trim: true,
},
height: {
    type: String,
    trim: true,
},
gender: {
    type: String,
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
allergies: {
    type: String,
    trim: true,
},
});

module.exports = bioSchema;