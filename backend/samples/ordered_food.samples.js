const Ordered_food = require('../models/ordered_food')
const Food = require('../models/food')

// const Coffee = await Food.findOne({ name: "Coffee" })

// const OrderedCoffee = new Ordered_food({
//     food: Coffee,
//     amount: 2,
//     discription: "เอาขมๆ"
// })

// const Sandwich = await Food.findOne({ name: "Sandwich" })

// const OrderedSandwich = new Ordered_food({
//     food: Sandwich,
//     amount: 3,
//     discription: "เอาหมด"
// })

module.exports = { OrderedCoffee, OrderedSandwich }