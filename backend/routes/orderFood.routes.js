const express = require('express')
const router = express.Router()
const {list_ordered_food, insertOrderedFood, deleteOrderedFood, getOrderedFood, updateOrderedFood } = require('../controllers/orderFood.controller')

router.get('/ordered_food/:id', getOrderedFood)
router.get('/ordered_food', list_ordered_food)
router.post('/ordered_food/:id',insertOrderedFood)
router.put('/ordered_food/:id',updateOrderedFood)
router.delete('/ordered_food/:id', deleteOrderedFood)

module.exports = router
