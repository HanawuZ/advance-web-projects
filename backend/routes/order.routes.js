const express = require('express')
const router = express.Router()
const { listOrder, insertOrder,  getOrder} = require('../controllers/order.controller')

// const {insertFood,updateFood,deleteFood, getFoodByID, listFood} = require('../controllers/foods.controller')

router.get('/order/:id', getOrder)
router.get('/order', listOrder)
router.post('/order',insertOrder)

module.exports = router