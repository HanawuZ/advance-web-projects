const mongoose = require('mongoose');
const Ordered_food = require("../models/ordered_food")
const { Schema } = mongoose;

const orders = new Schema({
    orders_id: Number,
    //order_food_id:  [{ type: Number }],
    order_food: [{ type: Ordered_food, ref: "Ordered_food" }],
    // order_food_id: [{ ordered_food_id: Number }],
    total_price: Number,
    table_id: Number,
})

const Orders = mongoose.model('Orders', orders);
module.exports =  Orders;
