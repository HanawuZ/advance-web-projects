const { Tables, Status } = require('../models/tables');

async function dumpStatus() {
    const status_empty = new Status({
        status_name: "empty"
    })

    const status_busy = new Status({
        status_name: "busy"
    })

    const status = [status_empty, status_busy]
    status.forEach(async (status) => {
        await status.save()
    });
}

async function dumpTables(){
    const status_empty = await Status.findOne({status_name:"empty"})
    console.log(status_empty)
    const status_busy = await Status.findOne({status_name:"busy"})

    const table1 = new Tables({
        tables_id:"1",
        status:status_empty
    })
    const table2 = new Tables({
        tables_id:"2",
        status:status_empty
    })
    const tables = [table1, table2]

    tables.forEach(async (table) => {
        await table.save()
    })
}

module.exports = {dumpTables, dumpStatus}