import mongoose from 'mongoose';
const { Schema } = mongoose;

const food = new Schema({
    name: String,
    price: Number,
})

module.exports = mongoose.module('food',food)