import mongoose from 'mongoose';
const { Schema } = mongoose;

const admin = new Schema({
    admin_id: Number,
    firstname: String,
    lastname: String,
    password: String,
    gender: String,
});

module.exports = mongoose.module('admin', admin)
