const express = require('express')
const router = express.Router()
const { authorization, makeHash, compareHash } = require('../middlewares/index')

router.post('/authorization/:id', (req, res, next) => {
    // ทำการตรวจสอบสิทธิ์โดยใช้ middleware authorization
    authorization(req, res, next);
    // ทำการประมวลผลเพิ่มเติมหลังจากตรวจสอบสิทธิ์สำเร็จ
    // เช่นการทำงานที่ต้องการในเส้นทางนี้
  });

module.exports = router