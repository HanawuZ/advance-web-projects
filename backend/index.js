const express = require('express')
const app = express()
const port = 3000
const connectToDatabase = require('./configs/setup')
const foodRoutes = require('./routes/food.routes')
const adminRoutes = require('./routes/admin.routes')
const orderRoutes = require('./routes/order.routes')
const orderFoodRoutes = require('./routes/orderFood.routes')
const paymentRoutes = require('./routes/payment.routes')
const signup = require('./routes/singup.routes')
const signin = require('./routes/signin.routes')
const { dumpFoods } = require('./samples/food.samples')
const { dumpAdmins }= require('./samples/admin.samples')
const { dumpOrderedFoods }= require('./samples/ordered_food.samples')

async function dumpData(){
    // await dumpFoods()
    // await dumpOrderedFoods()
    await dumpAdmins()
}

app.use((req, res, next) => {
    // console.log('Middleware')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    return next();
})   


app.use(express.json());
connectToDatabase()
 dumpData()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// app.use('/',authorization)
app.use('/',foodRoutes)
app.use('/',signup)
app.use('/',signin)
app.use('/',adminRoutes)
app.use('/',orderFoodRoutes)
app.use('/',orderRoutes)
app.use('/',paymentRoutes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})