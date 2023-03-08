const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const allergySchema = new Schema({

allergies: {
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

module.exports = allergySchema;