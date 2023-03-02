const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
  weight: {
    type: Schema.Types.ObjectId,
    ref: 'Weight',
  },
  medication: {
    // not sure is the type is correct for the references //
    type: Schema.Types.ObjectId,
    ref: 'Medication',
  },
  nutrition: {
    type: Schema.Types.ObjectId,
    ref: 'Nutrition',
  },
  emergencyContact: {
    type: Schema.Types.ObjectId,
    ref: 'EmergencyContact'
  },
  symptoms: {
    type: Schema.Types.ObjectId,
    ref: 'Symptoms'
  },
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
