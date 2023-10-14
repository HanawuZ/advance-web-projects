const mongoose = require('mongoose');
const Ordered_food = require("../models/ordered_food")
const { Schema } = mongoose;

const orders = new Schema({
    //order_food_id:  [{ type: Number }],
    order_food: [Ordered_food.schema],
    // order_food_id: [{ ordered_food_id: Number }],
    total_price: Number,
    table_id: String,
})

const Orders = mongoose.model('Orders', orders);
module.exports =  Orders;
