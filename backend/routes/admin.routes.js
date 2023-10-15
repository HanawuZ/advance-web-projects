const express = require('express')
const router = express.Router()
const { authorization } = require('../middlewares/index')
const { insertAdmin, updateAdmin, deleteAdmin, getAdminByID ,insertGender,getGender} = require('../controllers/admin.controller')

router.get('/admin', authorization, getAdminByID)  //todo plan to use
router.post('/admin',insertAdmin)
router.delete('/admin/:id', deleteAdmin)
router.post('/gender',insertGender)
router.get('/gender',getGender)
module.exports = router
