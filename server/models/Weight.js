const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const weightSchema = new Schema({

pounds: {
    type: Number,
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


module.exports = weightSchema;