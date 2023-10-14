const { Tables, Status } = require("../models/tables")
async function listTables(req, res, next) {
    Tables.find({})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get table data" })
        })
}

async function insertTable(req, res, next) {
    const table = new Tables({
        tables_id: req.tables_id,
        status: req.status,
        order: req.order
    })
    table.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}

async function insertstatus(req, res, next) {
    const sample_status = new Status({
        // tables_id: 1,
        status_name: "ไม่ว่าง"
    })
    sample_status.save().then((result) => {
        console.log(result)
        res.status(201).json({ message: "Complete add data" })
    }).catch((err) => {
        res.status(501).json({ message: "Cannot add data" })
    })
}

async function updateTable(req, res, next) {
    const id = req.params.id;
    const table_status = req.body.table_status;

    const status = await Status.findOne({ status_name: table_status })

    const updateTableData = { 
        status: status,
        tables_id : id
    }

    console.log("updateTableData",updateTableData)
    Tables.findOneAndUpdate({ tables_id: id }, updateTableData, {new: true}/*updateTableData, { new: true }*/)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Table not found' });
            }
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
}

async function getTableByid(req, res, next) {
    const id = req.params.id
    Tables.findOne({ id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: "Cannot get data" })
        })
}

module.exports = { listTables,insertstatus, insertTable, updateTable, getTableByid }