const Food = require('../models/food')
const Ordered_food = require('../models/ordered_food')

const Burger = new Food({
    // id: "1",
    name: 'Burger',
    price: 150,
    picture: "google.com/image.png"
})

module.exports = Burger
