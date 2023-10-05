import mongoose from 'mongoose';
const { Schema } = mongoose;

const ordered_food = new Schema({
    food_id: Number,
    amount: Number,
    discription: String,
})

module.exports = mongoose.module('ordered_food',ordered_food)