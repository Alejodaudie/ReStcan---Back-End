'use strict'

require('dotenv').config();


const mongoose = require('mongoose');
const restaurantsData = require( '../data/restaurants')
const Restaurant = require('../models/restaurants');


mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
.then(() => {
  Restaurant.deleteMany({});
})
.then (() => {
  return Restaurant.insertMany(restaurantsData)
  .then((results) => {
    console.log(results.length)
    
  })
  .then(()=> {
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
})



// insert restaurant
// find restaurant ID
// put restaurant ID into dishes
// connection close




//const dishesWithIds = {};




//restaurants insert(data)


// Dish.find()
//   .then(dishes => {
//     dishes.forEach(dishes => {
//       if (dishes.category === 'camus' || dishes.category === 'donald trump') {
//         dishesWithIds[dishes.category] = dishes._id;
//       }
//     });
//     restaurants[0].owner = dishesWithIds['donald trump'];
//     restaurants[1].owner = dishesWithIds['donald trump'];
//     restaurants[2].owner = dishesWithIds.camus;
//     Restaurants.create(restaurants)
//       .then(() => {
//         mongoose.connection.close();
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   })
//   .catch();