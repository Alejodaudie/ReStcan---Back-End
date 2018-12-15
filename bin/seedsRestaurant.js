
require('dotenv').config();

import restaurants from '../data/restaurants.json'

const mongoose = require('mongoose');
const Restaurants = require('../models/user');
const Dishes = require('../models/user');



mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});



//restaurants insert(data)

const dishesWithIds = {};


Dishes.find()
  .then(dishes => {
    dishes.forEach(dishes => {
      if (dishes.category === 'camus' || dishes.category === 'donald trump') {
        dishesWithIds[dishes.category] = dishes._id;
      }
    });
    restaurants[0].owner = dishesWithIds['donald trump'];
    restaurants[1].owner = dishesWithIds['donald trump'];
    restaurants[2].owner = dishesWithIds.camus;
    Restaurants.create(restaurants)
      .then(() => {
        mongoose.connection.close();
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch();