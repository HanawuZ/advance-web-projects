const mongoose = require('mongoose');
const { Schema } = mongoose;

const payments = new Schema({
    payments_id: Number,
    order_id: Number 
})

const Payments = mongoose.model('payments', payments);
module.exports = Payments;
