const Ordered_food = require('../models/ordered_food')
const Food = require('../models/food')

async function dumpOrderedFoods() {
    const Coffee = await Food.findOne({ name: "Coffee" })

    const OrderedCoffee = new Ordered_food({
        food: Coffee,
        amount: 2,
        discription: "เอาขมๆ"
    })

    const Sandwich = await Food.findOne({ name: "Sandwich" })

    const OrderedSandwich = new Ordered_food({
        food: Sandwich,
        amount: 3,
        discription: "เอาหมด"
    })


    const TeaMilk = await Food.findOne({ name: "Tea Milk" })
    const OrderedTeaMilk = new Ordered_food({
        food: TeaMilk,
        amount: 3,
        discription: "เอาหมด"
    })


    const ordered_foods = [OrderedCoffee, OrderedSandwich, OrderedTeaMilk]
    ordered_foods.forEach(async (ordered_food) => {
        await ordered_food.save()
    });
}

module.exports = { dumpOrderedFoods }