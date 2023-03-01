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
});

const Symptoms = model('Symptoms', symptomsSchema);

module.exports = Symptoms;