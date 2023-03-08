const { Schema, model } = require('mongoose');

const symptomsSchema = new Schema({
    startDate: {
        type: Date,
        required: true,
        trim: true,
    },
    endDate: {  
        type: Date,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: String,
        required: true,
        trim: true,
    },
    intensity: {
        type: Number,
        required: true,
        trim: true,
    },
    actionTaken: {
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

module.exports = symptomsSchema;