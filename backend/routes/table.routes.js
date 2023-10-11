const express = require('express')
const router = express.Router()
const { listTables,insertstatus, insertTable, updateTable, getTableByid} = require('../controllers/table.controller')


router.get('/table', listTables)
router.post('/insertTable',insertTable)
router.post('/insertstatus',insertstatus)
router.put('/updateTable/:id',updateTable)
router.get('/getpayment/:id', getTableByid)

module.exports = router