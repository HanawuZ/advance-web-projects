const mongoose = require('mongoose');
const { Schema } = mongoose;

const admin = new Schema({
    admin_id: Number,
    firstname: String,
    lastname: String,
    password: String,
    gender: String,
});

const Admin = mongoose.model('admin', admin);
module.exports =  Admin;
