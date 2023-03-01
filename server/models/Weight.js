const { Schema, model } = require('mongoose');

const weightSchema = new Schema({

weight: {
    type: Number,
    trim: true,
  },
});

const Weight = model('Weight', weightSchema);

module.exports = Weight;