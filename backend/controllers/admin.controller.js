const { Admin, Gender } = require("../models/admin")

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
    const id = req.params.id;

    const updatedAdminData = {
        // admin_id: 1,
        firstname: 'Burger',
        lastname: 'Kong',
        password: makeHash('12345ooooo'),
        gender: 'male'
    };

    Admin.findOneAndUpdate({ admin_id: id }, updatedAdminData, { new: true })
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
    const id = req.params.id
    Admin.findOne({ admin_id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
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