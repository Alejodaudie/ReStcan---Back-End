
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const restaurantsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

module.exports = Restaurants;