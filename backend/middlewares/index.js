const jwt = require('jsonwebtoken');
const key = 'MY_KEY';
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin')


async function makeHash(data) {
    const result = await bcrypt.hash(data, 10);
    return result
}

async function compareHash(data, hashData) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, hashData, (err, res) => {
            if (err) {
                reject(new Error('Error bcrypt compare'))
            } else {
                resolve({ status: res });
            }
        })
    });
}


function authorization(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    }
  
    jwt.verify(token, key, async (err, decode) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          message: 'Unauthorized',
        });
      }
  
      // ตรวจสอบสิทธิ์ของ admin
      const admin = await checkAdminCredentials(decode.username, decode.password);
      if (!admin) {
        return res.status(401).json({
          status: 401,
          message: 'Unauthorized',
        });
      }
  
      req.admin = admin; // เก็บข้อมูล admin ใน request object
      next();
    });
  }
  

async function checkAdminCredentials(admin_id, password) {
    const admin = await Admin.findOne({ admin_id });
    if (!admin) {
      return null; // ไม่พบบัญชี admin
    }
  
    const isPasswordValid = await compareHash(password, admin.password);
    if (!isPasswordValid.status) {
      return null; // รหัสผ่านไม่ถูกต้อง
    }
  
    return admin; // ส่งคืนข้อมูลของ admin ที่ตรงกัน
  }

module.exports = {authorization, makeHash, compareHash,checkAdminCredentials};