const Order = require("../models/orders")
const Ordered_food = require("../models/ordered_food")
async function listOrder(req, res, next) {
    Order.find({})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertOrder(req, res, next) {

    const OrderedCoffee = await Ordered_food.findOne({ _id:"65264d2bb8fb5cfa7a07378b" }).populate("food")
    console.log(OrderedCoffee)

    const total_price = OrderedCoffee.amount * OrderedCoffee.food.price
    console.log(total_price)
    const sample = new Order({
        order_food : [OrderedCoffee],
        table_id: 1,
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
    const id = req.params.id
    Order.findOne({ orders_id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

module.exports = { listOrder, insertOrder,  getOrder }
