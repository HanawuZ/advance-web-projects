const express = require('express')
const router = express.Router()
const{ authorization }= require('../middlewares')
const {insertFood,updateFood,deleteFood, getFoodByID, listFood} = require('../controllers/foods.controller')

router.get('/food/:id', getFoodByID)
router.get('/foods', listFood)
router.post('/food', authorization, insertFood)
router.put('/food/:id', authorization,updateFood)
router.delete('/food/:id', authorization, deleteFood)

module.exports = router