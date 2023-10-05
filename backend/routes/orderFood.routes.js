const express = require('express')
const router = express.Router()
const { listOrderFood, insertOrder,  getOrder} = require('../controllers/order.controller')

// const {insertFood,updateFood,deleteFood, getFoodByID, listFood} = require('../controllers/foods.controller')

router.get('/ordered-food/:id', getOrder)
router.get('/ordered-foods', listOrderFood)
router.post('/ordered-food',insertOrder)

module.exports = router