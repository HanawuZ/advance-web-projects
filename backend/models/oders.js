import mongoose from 'mongoose';
const { Schema } = mongoose;

const orders = new Schema({
    order_food_id: [{ ordered_food_id: Number }],
    total_price: Number,
    table_id: Number,
})

module.exports = mongoose.module('orders',orders)
