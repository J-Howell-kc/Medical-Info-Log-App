const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const nutritionSchema = new Schema({
    meal: {
        type: String,
        trim: true,
      },
    timeEaten: {
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
})

module.exports = nutritionSchema;