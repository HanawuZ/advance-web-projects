const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router()
const { Admin } = require('../models/admin');

const key = 'MY_KEY';

const compareHash = async (plainText, hashText) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainText, hashText, (err, data) => {
      if (err) {
        reject(new Error('Error bcrypt compare'))
      } else {
        resolve({ status: data });
      }
    })
  });
}

const findUser = (user_name) => {
  return new Promise((resolve, reject) => {
    console.log(user_name);
    Admin.findOne({ user_name: user_name })
      .then((data) => {
        if (data) {
          console.log(data);
          resolve(data);
        } else {
          reject(new Error("Cannont find username!"));
        }
      })
      .catch((err) => reject(err));
  });
};


// * Used
router.route('/signin')
    .post(async (req, res) => {
        const playload = {
          user_name: req.body.user_name,
          password: req.body.password,
        };

    console.log(playload)

    try {
      const result = await findUser(playload.user_name);
      const loginStatus = await compareHash(playload.password, result.password);
      const status = loginStatus.status;
      
      if (status) {
        console.log("Result USER", result)
        const user = {
          _id: result._id,
          user_name: result.user_name,
          password: playload.password,
          firstname: result.firstname,
          lastname: result.lastname,
          Gender: result.Gender,
          profile_picture: result.profile_picture,
        }
        const user_1 = {
          _id: result._id,
          user_name: result.user_name,
          password: playload.password,
          firstname: result.firstname,
          lastname: result.lastname,
          Gender: result.Gender,
          
        }
        console.log(user)
        const token = jwt.sign(user_1, key, { expiresIn: 86400 });
        res.status(200).json({user, token, status });
      } else {
        res.status(200).json({ status });
      }
    } catch (error) {
      console.log(error)
      res.status(404).send(error);
    }
  })

module.exports = router