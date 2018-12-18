'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const dishSchema = new Schema({
  subcategory: {
    type: String,
    required: true,
  },
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
    type: ObjectId,
    ref: 'Restaurant',
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;