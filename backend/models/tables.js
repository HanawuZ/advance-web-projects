import mongoose from 'mongoose';
const { Schema } = mongoose;

const tables = new Schema({
    status: Number,
    order_id: [{ order_id: Number }]
})

const status = new Schema({
    status_name: String
})


module.exports = mongoose.module('tables','status',tables,status)