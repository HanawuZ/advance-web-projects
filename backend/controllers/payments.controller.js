const Payment = require("../models/payments")
const { Tables, Status } = require('../models/tables')
const Orders = require('../models/orders')

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



    const status = await Status.findOne({ status_name: "empty" })

    const updateTableData = {
        status: status,
        tables_id: req.params.id,
    }

    console.log("AAAAAAAAAAAA", updateTableData)
    Tables.findOneAndUpdate({ tables_id: req.params.id }, updateTableData, { new: true }/*updateTableData, { new: true }*/)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Table not found' });
            }
            const samplePayment = new Payment({
                tables_id: req.params.id,
            })
            samplePayment.save().then(async (result) => {
                await Orders.findOneAndDelete({ table_id: req.params.id })
                res.status(201).json({ message: "Complete add data" })
            }).catch((err) => {
                res.status(501).json({ message: "Cannot add data" })
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
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

module.exports = { listPayment, insertPayment, getPaymentByID }