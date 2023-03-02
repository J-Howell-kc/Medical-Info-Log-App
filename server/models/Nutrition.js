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
    date: { 
        type: Date,
        trim: true,
    },
})

const Nutrition = model('Nutrition', nutritionSchema);

module.exports = Nutrition;