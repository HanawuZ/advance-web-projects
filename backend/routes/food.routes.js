const express = require('express')
const router = express.Router()
const {insertFood,updateFood,deleteFood, getFoodByID, listFood} = require('../controllers/foods.controller')

router.get('/food/:id', getFoodByID)
router.get('/foods', listFood)
router.post('/food',insertFood)
router.patch('/food/:id', updateFood)
router.delete('/food/:id', deleteFood)

module.exports = router