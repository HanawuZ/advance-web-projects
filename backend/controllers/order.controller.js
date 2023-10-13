const Order = require("../models/orders")
const Ordered_food = require("../models/ordered_food")
const Food = require("../models/food")
async function listOrder(req, res, next) {
    Order.find({})
        .then((result) => {

            // loop to get all ordered_food 


            // 
            // 

            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertOrder(req, res, next) {
    const order_foods = req.body.order_foods
    let newOrderFoods = []
    order_foods.forEach(async (order_food_id) => {
        const ordered_food = await Ordered_food.findOne({ _id: order_food_id }).populate("food")
        newOrderFoods.push(ordered_food)
        const _ = await Ordered_food.findOneAndDelete({ _id: order_food_id })
    });

    let total_price = 0
    for (let i = 0; i < newOrderFoods.length; i++) {
        total_price = total_price + newOrderFoods[i].amount * newOrderFoods[i].food.price
    }
    console.log(total_price)
    const sample = new Order({
        order_food: newOrderFoods,
        table_id: req.body.table_id,
        total_price: total_price,
    })



    sample.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}


async function getOrder(req, res, next) {
    const table_id = req.params.id
    Order.findOne({ table_id: table_id })
        .then(async (result) => {
            const OrderFoods = result.order_food
            let newOrderFoods = []
            for (let i = 0 ; i < OrderFoods.length ; i++) {
                const currentOrderFood = await Ordered_food.findOne({ _id: OrderFoods[i]._id }).populate("food")
                newOrderFoods.push(currentOrderFood)
            }
            const data = {
                table_id : result.table_id,
                total_price : result.total_price,
                order_food : newOrderFoods
            }
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get order" })
        })
}

module.exports = { listOrder, insertOrder, getOrder }
