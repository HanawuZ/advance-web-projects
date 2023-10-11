const express = require('express')
const app = express()
const port = 3000
const connectToDatabase = require('./configs/setup')
const foodRoutes = require('./routes/food.routes')
const adminRoutes = require('./routes/admin.routes')
const orderFoodRoutes = require('./routes/orderFood.routes')
const orderRoutes = require('./routes/order.routes')

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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})