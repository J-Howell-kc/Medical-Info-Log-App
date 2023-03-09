const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const nutritionSchema = new Schema({
    date: {
        type: String,
        trim: true,
    },
    breakfast: {
        type: String,
        trim: true,
      },
    breakTime: {
        type: String,
        trim: true,
    },
    lunch: {
        type: String,
        trim: true,
    },
    lunchTime: {
        type: String,
        trim: true,
    },
    dinner: {
        type: String,
        trim: true,
    },
    dinnerTime: {
        type: String,
        trim: true,
    },
    snack: {
        type: String,
        trim: true,
    },
    snackTime: {
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