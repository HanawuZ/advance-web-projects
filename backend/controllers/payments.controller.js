const Payment = require("../models/payments")
const Order = require("../models/orders")

async function listPayment(req, res, next) {
    Payment.find({})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

async function insertPayment(req, res, next) {

    const sampleOrder = await Order.findOne({ _id: "65264e1af8ec0761b8e8cac7" })
    console.log(sampleOrder)
    const samplePayment= new Payment({
        order: sampleOrder,
    })

    samplePayment.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}

async function getPaymentByID(req, res, next) {
    const id = req.params.id
    Payment.findOne({ payments_id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

module.exports = { listPayment,insertPayment, getPaymentByID }