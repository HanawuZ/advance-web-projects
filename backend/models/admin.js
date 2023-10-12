const mongoose = require('mongoose');
const { Schema } = mongoose;

const gender = new Schema({
    gender: String
})
const admin = new Schema({
    user_name: String,
    firstname: String,
    lastname: String,
    password: String,
    Gender: gender,
    profile_picture: String
});


const Admin = mongoose.model('admin', admin);
const Gender = mongoose.model('gender', gender);
module.exports =  {Admin,Gender};
