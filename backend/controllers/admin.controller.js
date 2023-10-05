const Admin = require("../models/admin")

async function insertAdmin(req, res, next) {
    const sampleAdmin = new Admin({
        admin_id: "1",
        firstname: 'Burger',
        lastname: 'King',
        password: 12345678,
        gender: 'male'
    })

    sampleAdmin.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}

async function updateAdmin(req, res, next) {
    const id = req.params.id;

    const updatedAdminData = {
        // admin_id: 1,
        firstname: 'Burger',
        lastname: 'Kong',
        password: 12345678,
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

module.exports = { insertAdmin, updateAdmin, deleteAdmin, getAdminByID}