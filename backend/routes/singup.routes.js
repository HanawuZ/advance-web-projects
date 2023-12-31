const express = require('express')
const router = express.Router()
const { updateAdmin} = require('../controllers/admin.controller')
const { authorization } = require('../middlewares/index') 
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const bcrypt = require('bcryptjs');
const { Admin, Gender } = require('../models/admin');
const multer = require('multer');
const makeHash = async (plainText) => {
  const result = await bcrypt.hash(plainText, 10);
  return result;
}

const insertAdmin = (dataUser) => {
  return new Promise((resolve, reject) => {
    var new_admin = new Admin({
      user_name: dataUser.user_name,
      firstname: dataUser.firstname,
      lastname: dataUser.lastname,
      password: dataUser.password,
      Gender: dataUser.gender,
      profile_picture: dataUser.profile_picture
    });
    new_admin.save()
      .then((models) => {
        resolve({ message: 'Singn up successfully' });
      }).catch((err) => {
        reject(new Error('Cannot insert admin to DB!'));
      })
  });
}

// router.route('/signup',)
//     .post((req, res) => {
//         makeHash(req.body.password)
//             .then(hashText => {
//                 const playload = {
//                     user_name: req.body.user_name,
//                     password: hashText,
//                     firstname: req.body.firstname,
//                     lastname: req.body.lastname,
//                     Gender: req.body.gender,
//                     profile_picture: req.body.profile_picture,
//                 }
//                 console.log(playload);
//                 insertAdmin(playload)
//                     .then(result => {
//                         console.log(result);
//                         res.status(200).json(result);
//                     })
//                     .catch(err => {
//                         console.log(err);
//                     })

//                     .catch(err => {
//                     })
//             })
//     });
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'frontend/src/assets/img/menu'); // กำหนดเส้นทางที่จะบันทึกไฟล์
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   }
// });

const upload_card = multer({
  storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, '');
      },
      filename: (req, file, cb) => {
          cb(null, file.originalname);
      }
  })
});
//const upload = multer({ storage: storage });
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// * Used
router.post('/signup', async (req, res) => {
  try {
    const hashText = await makeHash(req.body.password);

    const payload = {
      user_name: req.body.user_name,
      password: hashText,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      Gender: req.body.Gender,
      profile_picture: req.body.profile_picture
    };

    const newAdmin = new Admin(payload);

    const savedAdmin = await newAdmin.save();
    console.log("payload.Gender"+payload.Gender);
    console.log("savedAdmin"+savedAdmin);
    console.log("payload"+payload);
    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Cannot insert user to DB' });
  }
});

router.put("/update", authorization, updateAdmin)  //* Used
module.exports = router