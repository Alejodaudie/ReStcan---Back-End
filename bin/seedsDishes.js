'use strict'

require('dotenv').config();

const mongoose = require('mongoose');
const dishesData = require( '../data/dishes')
const Dish = require('../models/dishes');
const Restaurant = require('../models/restaurants');

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
.then(() => {
  Dish.deleteMany({});
})
.then (() => {
  Restaurant.findOne()
  .then(restaurant => {

    dishesData.forEach((dish) => {
      dish.restaurantID = restaurant._id;
    })
    return Dish.insertMany(dishesData)
    .then((results) => {
    console.log(results.length)
    
    })
  })
  .then(()=> {
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
})

