import mongoose from 'mongoose';
const { Schema } = mongoose;

const ordered_food = new Schema({
    food_id: Number,
    amount: Number,
    discription: String,
})

const Ordered_food = mongoose.model('ordered_food', ordered_food);
module.exports =  Ordered_food;
