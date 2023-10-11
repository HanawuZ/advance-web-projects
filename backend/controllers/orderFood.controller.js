const Ordered_food = require("../models/ordered_food")
const Food = require("../models/food")
async function list_ordered_food(req, res, next) {

    
    Ordered_food.find({}).populate("food")
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertOrderedFood(req, res, next) {

    // Find food burger 
    const Burger = await Food.findOne({ name: "Burger" })

    const sample = new Ordered_food({
        food: Burger,
        amount: 12,
        discription: "ลองของ"
    })

    sample.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })

}


async function deleteOrderedFood(req, res, next) {
    const id = req.params.id;
    Ordered_food.findOneAndDelete({ ordered_food_id: id })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Food not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
}

async function getOrderedFood(req, res, next) {
    const id = req.params.id
    Ordered_food.findOne({ ordered_food_id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })

}

module.exports = {list_ordered_food, insertOrderedFood, deleteOrderedFood, getOrderedFood }