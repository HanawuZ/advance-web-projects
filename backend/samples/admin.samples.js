const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')

const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

async function dumpAdmins(){
    const password = await makeHash("123456")
    const admin1 = new Admin({
        admin_id: 1,
        firstname: "John",
        lastname: "Doe",
        password: password,
        gender : "male"
    })

    admin1.save()

}

module.exports = {dumpAdmins}