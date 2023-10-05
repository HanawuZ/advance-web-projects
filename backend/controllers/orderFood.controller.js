const Ordered_food = require("../models/odered_food")

async function list_ordered_food(req, res, next) {
    Ordered_food.find({})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertOrderedFood(req, res, next) {
    const sample = new Ordered_food({
        ordered_food_id: "1",
        food_id: 'Burger',
        amount: 150,
        discription: "แพ้นมวัว"
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
    Ordered_food.findOneAndDelete({ id: id })
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
    Ordered_food.findOne({ id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })

}

module.exports = {list_ordered_food, insertOrderedFood, deleteOrderedFood, getOrderedFood }