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

const Cocoa = new Food({
    name: 'Cocoa',
    price: 70,
    picture: "google.com/image4.png"
})

const Espresso = new Food({
    name: 'Espresso',
    price: 80,
    picture: "google.com/image5.png"

})

const Mocca = new Food({
    name: 'Mocca',
    price: 69,
    picture: "google.com/image6.png"
})

const Latte = new Food({
    name: 'Latte',
    price: 75,
    picture: "google.com/image7.png"
})

const Bingsoo = new Food({
    name: 'Bingsoo',
    price: 120,
    picture: "google.com/image8.png"
})
module.exports = { Burger , Sandwich, TeaMilk, Coffee, Cocoa, Espresso, Mocca, Latte, Bingsoo }
