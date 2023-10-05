const Food = require('./models/food');

function testAddFood(){
    const food = new Food({
        name: 'Chicken',
        price: 200,
    })
    
    food.save().then((models) => {
        console.log(models)
        resolve({ message: 'Singn up successfully' });
    }).catch((err) => {
        reject(new Error('Cannot insert user to DB!'));
    })
}

module.exports = testAddFood;