const express = require('express')
const router = express.Router()
const { listPayment,insertPayment, getPaymentByID} = require('../controllers/payments.controller')

router.get('/payment', listPayment)
router.post('/payment',insertPayment)
router.get('/getpayment/:id', getPaymentByID)


module.exports = router
