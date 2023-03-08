const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const medicationSchema = new Schema ({
    medicationName: {
        type: String,
        trim: true,
    },
    dosage: {
        type: String,
        trim: true,
    },
    action: {
        type: Boolean,
        default: false,
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

module.exports = medicationSchema;