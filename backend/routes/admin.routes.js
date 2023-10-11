const express = require('express')
const router = express.Router()
const { insertAdmin, updateAdmin, deleteAdmin, getAdminByID } = require('../controllers/admin.controller')

router.get('/admin/:id', getAdminByID)
router.post('/admin',insertAdmin)
router.put('/admin/:id', updateAdmin)
router.delete('/admin/:id', deleteAdmin)

module.exports = router
