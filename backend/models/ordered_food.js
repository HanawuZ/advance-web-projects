const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordered_food = new Schema({
    // ordered_food_id:Number,
    // food_id: Number,
    amount: Number,
    discription: String,
    food: {type: mongoose.Types.ObjectId, ref: "Food"}

})

const Ordered_food = mongoose.model('OrderedFood', ordered_food);
module.exports =  Ordered_food;
