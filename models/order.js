'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
  dishes: [{
    dish_id: { 
      type: ObjectId,
      ref: 'dish',
    },
    qty: Number
  }],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

