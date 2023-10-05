import mongoose from 'mongoose';
const { Schema } = mongoose;

const AdminModel = mongoose.model('Admin', admin);
const FoodModel = mongoose.model('Food', food);
const OrderedFoodModel = mongoose.model('OrderedFood', ordered_food);
const OrdersModel = mongoose.model('Orders', orders);
const PaymentsModel = mongoose.model('Payments', payments);
const TablesModel = mongoose.model('Tables', tables);

const newAdmin1 = new AdminModel({
    admin_id: 1,
    firstname: 'John',
    lastname: 'Doe',
    password: 'password123',
    hidden: false,
    gender: 1,
});

const newAdmin2 = new AdminModel({
    admin_id: 1,
    firstname: 'John',
    lastname: 'Doe',
    password: 'password123',
    hidden: false,
    gender: 1,
});

newAdmin.save()
    .then(savedAdmin => {
        console.log('Admin saved:', savedAdmin);
    })
    .catch(error => {
        console.error('Error saving admin:', error);
    });



const admin = new Schema({
    firstname: String,
    lastname: String,
    password: String,
    gender: Number,
});

const food = new Schema({
    name: String,
    price: Number,
})

const ordered_food = new Schema({
    food_id: Number,
    amount: Number,
    discription: String,
})

const orders = new Schema({
    order_food_id: [{ ordered_food_id: Number }],
    total_price: Number,
    table_id: Number,
})


const payments = new Schema({
    order_id: [{ order_id: Number }]
})

const tables = new Schema({
    status: Number,
    order_id: [{ order_id: Number }]
})

const status = new Schema({
    status_name: String
})




