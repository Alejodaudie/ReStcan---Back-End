'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishesSchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: String,
    required: true,
    unique: true
  },
  restaurantID: {
    type: String,
    required: true,
    unique: true
  },
});

const Dishes = mongoose.model('Dishes', dishesSchema);

module.exports = Dishes;