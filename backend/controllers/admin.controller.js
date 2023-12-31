const { Admin, Gender } = require("../models/admin")
const bcrypt = require("bcryptjs");
const { makeHash } = require('../middlewares/index')

async function insertAdmin(req, res, next) {
    const Pass = await makeHash('123456')
    const sampleAdmin = new Admin({
        admin_id: "5",
        firstname: 'AAA',
        lastname: 'AAA',
        password: Pass,
        gender: 'male'
    })

    sampleAdmin.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    })
        .catch((err) => {
            console.log(err)
            res.status(501).json({ message: "Cannot add data" })
        })
}

async function updateAdmin(req, res, next) {

    const decodedData = req.decoded;

    const admin = await Admin.findOne({ _id: decodedData._id })
    let password
    
    // Check if request password is not equal to password in database   
    // admin.password is hash password in database
    // Should decode first
    if (!req.body.password) {
        password = admin.password
    } else {
        const isPasswordCorrect = await bcrypt.compare(req.body.password, admin.password)
        if (!isPasswordCorrect) {
            password = await makeHash(req.body.password)
        } else {
            password = admin.password
        }
    }
    
    const updatedAdminData = {
        user_name : req.body.user_name,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: password,
        Gender: req.body.Gender,
        profile_picture: req.body.profile_picture
    };

    Admin.findOneAndUpdate({ _id: decodedData._id }, updatedAdminData, { new: true })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Admin not found' });
            }
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
}

async function deleteAdmin(req, res, next) {
    const id = req.params.id;
    Admin.findOneAndDelete({ admin_id: id })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Food not found' });
            }
            res.status(200).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });

}

async function getAdminByID(req, res, next) {
    const decodedData = req.decoded;
    const id = decodedData._id
    // const id = req.params.id
    Admin.findOne({ _id: id })
        .then((result) => {
            const user_data = {
                user_name: result.user_name,
                firstname: result.firstname,
                lastname: result.lastname,
                profile_picture: result.profile_picture,
                Gender: result.Gender
            }
            console.log("user_data is ",user_data)
            res.status(200).json(user_data)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ message: "Cannot get admin data" })
        })
}

async function insertGender(req, res, next) {
    const genderValue = req.body.gender; // หากเรามีพารามิเตอร์ "gender" ใน request body

    // สร้างอ็อบเจ็กต์ Gender ด้วยค่าที่มาจาก request body
    const sampleGender = new Gender({
        gender: genderValue,
    });

    try {
        // บันทึกข้อมูลลงในฐานข้อมูล
        const result = await sampleGender.save();
        console.log(result);
        res.status(201).json({ message: "Complete add data" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Cannot add data" });
    }
}

async function getGender(req, res, next){
    Gender.find({})
    .then((result) =>{
        res.status(200).json(result)
    })
    .catch((err) =>{
        console.log(err);
    })
}

module.exports = { insertAdmin, updateAdmin, deleteAdmin, getAdminByID, insertGender ,getGender}