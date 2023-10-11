const Food = require('../models/food')

const Burger = new Food({
    name: 'Burger',
    price: 150,
    picture: "google.com/image.png"
})

const Sandwich = new Food({
    name: 'Sandwich',
    price: 100,
    picture: "google.com/image1.png"
})

const TeaMilk = new Food({
    name: 'Tea Milk',
    price: 50,
    picture: "google.com/image2.png"
})

const Coffee = new Food({
    name: 'Coffee',
    price: 60,
    picture: "google.com/image3.png"
})
module.exports = { Burger , Sandwich, TeaMilk, Coffee }
