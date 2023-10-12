const Food = require('../models/food')

const Burger = new Food({
    name: 'Burger',
    price: 150,
    picture: "assets/img/menu/menu-item-1.png"
})

const Sandwich = new Food({
    name: 'Sandwich',
    price: 100,
    picture: "assets/img/menu/menu-item-2.png"
})

const TeaMilk = new Food({
    name: 'Tea Milk',
    price: 50,
    picture: "assets/img/menu/menu-item-3.png"
})

const Coffee = new Food({
    name: 'Coffee',
    price: 60,
    picture: "assets/img/menu/menu-item-4.png"
})

const Cocoa = new Food({
    name: 'Cocoa',
    price: 70,
    picture: "assets/img/menu/menu-item-5.png"
})

const Espresso = new Food({
    name: 'Espresso',
    price: 80,
    picture: "assets/img/menu/menu-item-6.png"

})

async function dumpFoods() {
    const foods = [Burger, Sandwich, TeaMilk, Coffee, Cocoa, Espresso]
    foods.forEach( async (food) => {
        await food.save()
    });
}

module.exports = { dumpFoods }
