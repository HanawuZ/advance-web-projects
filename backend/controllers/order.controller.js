const Order = require("../models/oders")

async function listOrderFood(req, res, next) {
    Order.find({})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertOrder(req, res, next) {
    const sample = new Order({
        orders_id: 1,
        // order_food_id: [{ordered_food_id: 1}, {ordered_food_id:2}],
        order_food_id: [1,2],
        total_price: 123,
        table_id: 1
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

module.exports = { listOrderFood, insertOrder,  getOrder }