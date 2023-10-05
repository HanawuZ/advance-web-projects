import mongoose from 'mongoose';
const { Schema } = mongoose;

const food = new Schema({
    name: String,
    picture:String,
    price: Number,
})

const Food = mongoose.model('food', food);
module.exports =  Food;
