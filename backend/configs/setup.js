// getting-started.js
const mongoose = require('mongoose');

function connectToDatabase(req,res,next) {

    const url = 'mongodb://127.0.0.1:27017/foods'
    const configs = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    }

    mongoose.connect(url,configs)
    .then(() => {
        console.log('Connected to database...')
        // testAddFood()
        next()
    }).catch(err => {
        console.log(err)
        res.status(501).send('Cannot connect to MongoDB');
    })
}

module.exports = connectToDatabase

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

