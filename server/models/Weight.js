const { Schema, model } = require('mongoose');

const weightSchema = new Schema({

pounds: {
    type: Number,
    trim: true,
  },
});

const Weight = model('Weight', weightSchema);

module.exports = Weight;