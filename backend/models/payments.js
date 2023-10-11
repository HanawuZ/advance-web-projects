const mongoose = require('mongoose');
const { Schema } = mongoose;
const Orders = require('./orders')
const payments = new Schema({
    // order: Orders
    order: {type: mongoose.Types.ObjectId, ref: "Orders"},
})

const Payments = mongoose.model('payments', payments);
module.exports = Payments;
