import mongoose from 'mongoose';
const { Schema } = mongoose;

const admin = new Schema({
    firstname: String,
    lastname: String,
    password: {
        type: String,
        required: true
    },
    gender: String,
});

module.exports = mongoose.module('admin', admin)
