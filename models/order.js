'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
  dishID: {
    type: ObjectId,
    ref: 'Dish',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;