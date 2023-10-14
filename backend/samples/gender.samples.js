const { Gender } = require('../models/admin');

async function dumpGenders() {
    const male = Gender({ gender : "male" })
    const female = Gender({ gender: "female"})
    await male.save()
    await female.save()
}

module.exports = { dumpGenders }