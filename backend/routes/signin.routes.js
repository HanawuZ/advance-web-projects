const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router()
const {Admin} = require('../models/admin');

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
          resolve(data);
        } else {
          reject(new Error("Cannont find username!"));
        }
      })
      .catch((err) => reject(err));
  });
};



router.route('/signin')
    .post(async (req, res) => {
        const playload = {
          user_name: req.body.user_name,
          password: req.body.password,
<<<<<<< HEAD
=======
          // firstname: req.body.firstname,
          // lastname: req.body.lastname,
          // gender: req.body.gender,
>>>>>>> a123e8601f99fe63b4dc9ce53d61ab5fafefbfce
        };

        console.log(playload)

        try {
            const result = await findUser(playload.user_name);
            const loginStatus = await compareHash(playload.password, result.password);
            const status = loginStatus.status;
            if (status) {
              console.log(result)
                const user = {
                  user_name: result.user_name,
                  password: result.password,
                  firstname: result.firstname,
                  lastname: result.lastname,
                  Gender: result.Gender
                }
                const token = jwt.sign(user, key, { expiresIn: 86400 });
                res.status(200).json({ result, token, status });
            } else {
                res.status(200).json({ status });
            }
        } catch (error) {
            console.log(error)
            res.status(404).send(error);
        }
    })

module.exports = router