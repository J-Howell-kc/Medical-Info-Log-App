const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const symptomsSchema = new Schema({
    symptom: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    intensity: {
        type: Number,
        trim: true,
    },
    actionTaken: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        trim: true,
    },
    dateStartStop: {
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
      },
});

module.exports = symptomsSchema;