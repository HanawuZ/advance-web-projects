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
    const table_id = req.body.table_id
    
    order_foods.forEach(async (order_food) => {
        await Ordered_food.findOneAndDelete( {_id : order_food._id} )
    });
    
    // Find existing order with this table_id
    const existedOrder = await Order.findOne({ table_id: table_id })

    // If order with this table_id is already exist //todo
    if (existedOrder) {

        // define updated order foods list
        let updateOrderedFood = existedOrder.order_food
        
        // define incoming order foods list
        const incomingOrderedFood = order_foods

        let newTotalPrice = existedOrder.total_price

        // const new_order_foods = order_foods;

        for (let i = 0; i < incomingOrderedFood.length; i++) {
            updateOrderedFood.push(incomingOrderedFood[i])
            newTotalPrice = newTotalPrice + incomingOrderedFood[i].amount * incomingOrderedFood[i].food.price   
        }

        const data = new Order({
            order_food: updateOrderedFood,
            table_id: table_id,
            total_price: newTotalPrice,
        })
    
        Order.findOneAndUpdate({ table_id: table_id }, data, { new: true })
        .then((result) => {
            console.log(result)
            res.status(201).json({ message: "Complete add data" })
        }).catch((err) => {
            res.status(501).json({ message: "Cannot add data" })
        })

    } 
    // Else create new order
    else {
        let total_price = 0
        for (let i = 0; i < order_foods.length; i++) {
            total_price = total_price + order_foods[i].amount * order_foods[i].food.price
        }

        const data = new Order({
            order_food: order_foods,
            table_id: table_id,
            total_price: total_price,
        })

        data.save().then((result) => {
            console.log(result)
            res.status(201).json({ message: "Complete add data" })
        }).catch((err) => {
            res.status(501).json({ message: "Cannot add data" })
        })


    }    
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
