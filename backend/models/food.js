// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const food = new Schema({
    name: String,
    picture:String,
    price: Number,

})

const Food = mongoose.model('Food', food);
module.exports =  Food;
