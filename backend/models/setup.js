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

newAdmin1.save()
    .then(savedAdmin => {
        console.log('Admin saved:', savedAdmin);
    })
    .catch(error => {
        console.error('Error saving admin:', error);
    });
newAdmin2.save()
    .then(savedAdmin => {
        console.log('Admin saved:', savedAdmin);
    })
    .catch(error => {
        console.error('Error saving admin:', error);
    });












