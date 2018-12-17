'use strict'

require('dotenv').config();

const mongoose = require('mongoose');
const dishesData = require( '../data/dishes')
const Dish = require('../models/dishes');
import Restaurant = from '../data/restaurants

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
.then (() => {
  Restaurant.find()
  .then(restaurant =>{

//1.obtener restaurant id from restaurant object
//2. insert restaurant id en dishes

    return Dish.insertMany(dishesData)
  .then((results) => {
    console.log(results.length)
    
  })
  })
  .then(error);
  
  .then(()=> {
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
})





// dishes insert (data)

