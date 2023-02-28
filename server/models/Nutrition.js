const { Schema, model } = require('mongoose');

const nutritionSchema = new Schema({
    food: {
        type: String,
        trim: true,
    },
    drinks: {
        type: String,
        trim: true,
    },
    calories: {
        type: String,
        default: 0,
        trim: true,
    },
})

const Nutrition = model('Medication', nutritionSchema);

module.exports = Nutrition;