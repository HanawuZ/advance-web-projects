import mongoose from 'mongoose';
const { Schema } = mongoose;

const tables = new Schema({
    tables_id: Number,
    status: Number,
    order_id: [{ order_id: Number }]
})

const status = new Schema({
    status_name: String
})


const Tables = mongoose.model('tables', tables);
const Status = mongoose.model('status', status);

module.exports =  {Payments,status};