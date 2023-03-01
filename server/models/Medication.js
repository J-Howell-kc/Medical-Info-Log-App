const { Schema, model } = require('mongoose');

const medicationSchema = new Schema ({
    medicationName: {
        type: String,
        trim: true,
    },
    dosage: {
        type: String,
        trim: true,
    },
    frequency: {    
        type: String,
        trim: true,
    },
    pillCount: {
        type: Number,
        trim: true,
    },
    startDate: {
        type: Date,
        trim: true,
    },
    endDate: {
        type: Date,
        trim: true,
    },
    taken: {
        type: Boolean,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Medication = model('Medication', medicationSchema);

module.exports = Medication;