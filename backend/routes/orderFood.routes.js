const express = require('express')
const router = express.Router()
const {insertOrderedFood, deleteOrderedFood, getOrderedFood } = require('../controllers/orderFood.controller')

router.get('/oder_food/:id', getOrderedFood)
router.post('/oder_food',insertOrderedFood)
router.delete('/oder_food/:id', deleteOrderedFood)

module.exports = router