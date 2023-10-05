const Payment = require("../models/payments")

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
    const samplePayment= new Payment({
        payments_id: "123456",
        order_id: 1,
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
    Payment.findOne({ id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

module.exports = { listPayment,insertPayment, getPaymentByID }