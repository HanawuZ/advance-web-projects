const mongoose = require('mongoose');
const { Schema } = mongoose;

const tables = new Schema({
    tables_id: Number,
    order: [{ type: mongoose.Types.ObjectId, ref: "Orders" }],
})

const status = new Schema({
    status_id: Number,
    status_name: String
})


const Tables = mongoose.model('tables', tables);
const Status = mongoose.model('status', status);

module.exports =  {Tables,Status};