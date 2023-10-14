const mongoose = require('mongoose');
const { Schema } = mongoose;

const status = new Schema({
    status_name: String
})
const Status = mongoose.model('status', status);

const tables = new Schema({
    tables_id: Number,
    status: {type: Status.schema },
})
const Tables = mongoose.model('tables', tables);

module.exports =  {Tables,Status};