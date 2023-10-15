const express = require('express')
const router = express.Router()
const {list_ordered_food, insertOrderedFood, deleteOrderedFood, getOrderedFood, updateOrderedFood, getOrderedFoodByTable } = require('../controllers/orderFood.controller')

router.get('/ordered_food/:id', getOrderedFood)         // * Used
// router.get('/ordered_food', list_ordered_food)          
router.post('/ordered_food/:id',insertOrderedFood)      // * Used
router.put('/ordered_food/:id',updateOrderedFood)       // * Used
router.delete('/ordered_food/:id', deleteOrderedFood)   // * Used
// router.get('/ordered_food/table/:id', getOrderedFoodByTable)   
module.exports = router
