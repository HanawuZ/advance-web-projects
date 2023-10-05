// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const food = new Schema({
    name: String,
    price: Number,
})

const Food = mongoose.model('Food', food);

module.exports = Food