const Food = require('../models/food')

const Burger = new Food({
    name: 'Burger',
    price: 150,
    picture: "backend//img//menu//menu-item-1.png"
})

const Sandwich = new Food({
    name: 'Sandwich',
    price: 100,
    picture: "backend//img//menu//menu-item-2.png"
})

const TeaMilk = new Food({
    name: 'Tea Milk',
    price: 50,
    picture: "backend//img//menu//menu-item-3.png"
})

const Coffee = new Food({
    name: 'Coffee',
    price: 60,
    picture: "backend//img//menu//menu-item-4.png"
})

const Cocoa = new Food({
    name: 'Cocoa',
    price: 70,
    picture: "backend//img/menu//menu-item-5.png"
})

const Espresso = new Food({
    name: 'Espresso',
    price: 80,
    picture: "backend//img//menu//menu-item-6.png"

})

module.exports = { Burger , Sandwich, TeaMilk, Coffee, Cocoa, Espresso }
