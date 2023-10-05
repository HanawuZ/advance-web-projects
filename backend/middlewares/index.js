const jwt = require('jsonwebtoken');
const key = 'MY_KEY';
const bcrypt = require('bcryptjs');


function authorization(req, res, next) { 
    const token = req.headers.authorization;
    if (token === undefined) {
        return res.status(401).json({
            "status": 401,
            "message": 'Unauthorized' 
        });
    } else {
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    "status": 401,
                    "message": 'Unauthorized'
                });
            } else {
                console.log(decode)
                next();
            }
        });
    }
}


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
module.exports = {authorization, makeHash, compareHash};