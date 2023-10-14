const { Admin } = require('../models/admin')
const bcrypt = require('bcryptjs')

const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

async function dumpAdmins(){
    const password = await makeHash("123456")
    const admin1 = new Admin({
        user_name: "cc",
        firstname: "John",
        lastname: "Doe",
        password: password,
        Gender : "male",
        profile_picture: ""
    })

    admin1.save()

}

module.exports = {dumpAdmins}