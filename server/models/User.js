const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const weightSchema = require('./Weight');
const medicationSchema = require('./Medication');
const nutritionSchema = require('./Nutrition');
const emergencyContactSchema = require('./EmergencyContact');
const symptomsSchema = require('./Symptoms');
const bioSchema = require('./Bio');
const allergiesSchema = require('./Allergies');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  allergies: [allergiesSchema],
  
  weight:[weightSchema],

  bio: [bioSchema],

  medication: [medicationSchema],

  nutrition: [nutritionSchema],

  emergencyContact: [emergencyContactSchema],

  symptoms: [symptomsSchema],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
