// getting-started.js
const mongoose = require('mongoose');

await mongoose.connect('mongodb://127.0.0.1:27017/foods').catch((err) => {
    console.log(err);
});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

