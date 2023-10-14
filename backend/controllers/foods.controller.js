const Food = require("../models/food")
const { Burger , Sandwich, TeaMilk, Coffee, Cocoa, Espresso} = require("../samples/food.samples")

async function listFood(req, res, next) {
    Food.find({})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertFood(req, res, next) {
    const Data = new Food({
        name: req.body.name,
        price: req.body.price,
        picture: req.body.picture,
    })

    Data.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}

/* 


*/

async function updateFood(req, res, next) {
    const id = req.params.id;

    const updatedFoodData = {
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
    }
    Food.findOneAndUpdate({ _id: id }, updatedFoodData, { new: true })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Food not found' });
            }
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
}

async function deleteFood(req, res, next) {
    const _id = req.params.id;
    try {
        const result = await Food.findOneAndDelete({ _id });
        if (!result) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}


async function getFoodByID(req, res, next) {
    const id = req.params.id
    Food.findOne({ _id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

module.exports = { insertFood, updateFood, deleteFood, getFoodByID, listFood }