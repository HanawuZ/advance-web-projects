const mongoose = require('mongoose');
const Food = require('./food')
const { Schema } = mongoose;

const ordered_food = new Schema({
    // ordered_food_id:Number,
    // food_id: Number,
    amount: Number,
    discription: String,
    food: {type: Food.schema},
    table_id: String,
})

const Ordered_food = mongoose.model('OrderedFood', ordered_food);
module.exports =  Ordered_food;
