
require('dotenv').config();

import dishes from '../data/dishes.json'

const mongoose = require('mongoose');
const Dishes = require('../models/user');



mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});



// dishes insert (data)


Dishes.create(dishes)
  .then(() => {
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });