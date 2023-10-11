const express = require('express')
const app = express()
const port = 3000
const connectToDatabase = require('./configs/setup')
const foodRoutes = require('./routes/food.routes')
const adminRoutes = require('./routes/admin.routes')
const orderRoutes = require('./routes/order.routes')
const orderFoodRoutes = require('./routes/orderFood.routes')
<<<<<<< HEAD
const paymentRoutes = require('./routes/payment.routes')
=======
const orderRoutes = require('./routes/order.routes')
>>>>>>> aa5f10dca134c1c1a18e1bb57d31a4be1f8eeb07

app.use((req, res, next) => {
    // console.log('Middleware')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    return next();
})   


app.use(express.json());

connectToDatabase()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/',foodRoutes)
app.use('/',adminRoutes)
app.use('/',orderFoodRoutes)
app.use('/',orderRoutes)
<<<<<<< HEAD
app.use('/',paymentRoutes)
=======
>>>>>>> aa5f10dca134c1c1a18e1bb57d31a4be1f8eeb07
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})