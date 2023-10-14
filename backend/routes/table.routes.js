const express = require('express')
const router = express.Router()
const { listTables,insertstatus, insertTable, updateTable, getTableByid} = require('../controllers/table.controller')
const { authorization } = require('../middlewares/')

router.get('/table', listTables)
router.post('/insertTable',authorization,insertTable)
router.post('/insertstatus',authorization,insertstatus)
router.put('/table/:id',
    // authorization,
    updateTable
)
router.get('/getpayment/:id', getTableByid)

module.exports = router