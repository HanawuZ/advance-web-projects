// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);


const food = new Schema({
    id: Number,
    name: String,
    picture:String,
    price: Number,
})

// Create a static method to increment the 'id' field
food.statics.incrementId = async function () {
    const food = this;
    const lastFood = await food.findOne({}, {}, { sort: { id: -1 } });
    const newId = lastFood ? lastFood.id + 1 : 1;
    return newId;
};

// Use a pre 'save' hook to automatically increment the 'id' field
food.pre('save', async function (next) {
    if (!this.id) {
        this.id = await this.constructor.incrementId();
    }
    next();
});

const Food = mongoose.model('food', food);
module.exports =  Food;
