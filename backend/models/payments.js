const mongoose = require('mongoose');
const { Schema } = mongoose;

const payments = new Schema({
    order: Orders 
})

const Payments = mongoose.model('payments', payments);
module.exports = Payments;
