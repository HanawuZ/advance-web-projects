const Food = require("../models/food")
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
    const sampleFood = new Food({
        id: "1",
        name: 'Burger',
        price: 150,
        picture: "google.com/image.png"
    })

    sampleFood.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}

async function updateFood(req, res, next) {
    const id = req.params.id;

    const updatedFoodData = {
        name: 'Chicken Sandwich',
        price: 110,
        picture: 'google.com/image.png',
    };

    Food.findOneAndUpdate({ id: id }, updatedFoodData, { new: true })
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
    const id = req.params.id;
    Food.findOneAndDelete({ id: id })
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

async function getFoodByID(req, res, next) {
    const id = req.params.id
    Food.findOne({ id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

module.exports = { insertFood, updateFood, deleteFood, getFoodByID, listFood }