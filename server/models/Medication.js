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
    timeTaken: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Medication = model('Medication', medicationSchema);

module.exports = Medication;