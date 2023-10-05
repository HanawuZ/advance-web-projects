import mongoose from 'mongoose';
const { Schema } = mongoose;

const payments = new Schema({
    order_id: [{ order_id: Number }]
})

const Payments = mongoose.model('payments', payments);
module.exports = Payments;
