import mongoose from 'mongoose';
const { Schema } = mongoose;

const payments = new Schema({
    order_id: [{ order_id: Number }]
})

module.exports = mongoose.module('payments',payments)
