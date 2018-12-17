'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  restaurantID: {
    type: String,
    required: false,
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;