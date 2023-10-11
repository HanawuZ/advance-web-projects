const Food = require('../models/food')
const Ordered_food = require('../models/ordered_food')

const Burger = new Food({
    // id: "1",
    name: 'Burger',
    price: 150,
    picture: "google.com/image.png"
})

const Sandwich = new Food({
    // id: "2",
    name: 'Sandwich',
    price: 100,
    picture: "google.com/image1.png"
})
module.exports = { Burger , Sandwich }
