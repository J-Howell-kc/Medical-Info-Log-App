const { Schema, model } = require('mongoose');

const weightSchema = new Schema({

pounds: {
    type: Number,
    trim: true,
  },
  date: {
    type: Date,
    trim: true,
    },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
},
});


const Weight = model('Weight', weightSchema);

module.exports = Weight;