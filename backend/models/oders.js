import mongoose from 'mongoose';
const { Schema } = mongoose;

const orders = new Schema({
    order_food_id: [{ ordered_food_id: Number }],
    total_price: Number,
    table_id: Number,
})

const Orders = mongoose.model('orders', orders);
module.exports =  Orders;
