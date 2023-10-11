const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');

const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertAdmin = (dataUser) => {
    return new Promise((resolve, reject) => {
        var new_admin = new Admin({
            admin_id: dataUser.admin_id,
            password: dataUser.password,
            firstname: dataUser.firstname,
            lastname: dataUser.lastname,
            gender: dataUser.gender,

        });
        new_admin.save()
            .then((models) => {
                resolve({ message: 'Singn up successfully' });
            }).catch((err) => {
                reject(new Error('Cannot insert user to DB!'));
            })
    });
}

router.route('/signup')
    .post((req, res) => {
        makeHash(req.body.password)
            .then(hashText => {
                const playload = {
                    admin_id: req.body.admin_id,
                    password: hashText,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    gender: req.body.gender,
                }
                console.log(playload);
                insertAdmin(playload)
                    .then(result => {
                        console.log(result);
                        res.status(200).json(result);
                    })
                    .catch(err => {
                        console.log(err);
                    })

                    .catch(err => {
                    })
            })
    });

module.exports = router