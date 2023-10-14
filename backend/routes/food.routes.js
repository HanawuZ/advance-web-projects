const express = require('express')
const router = express.Router()
const{ authorization }= require('../middlewares')
const {insertFood,updateFood,deleteFood, getFoodByID, listFood} = require('../controllers/foods.controller')

router.get('/food/:id', getFoodByID)
router.get('/foods', listFood)                          // * Used
router.post('/food', authorization,insertFood)          // * Used
router.put('/food/:id',authorization,updateFood)        // todo wait to used
router.delete('/food/:id', authorization,deleteFood)    // * Used

module.exports = router