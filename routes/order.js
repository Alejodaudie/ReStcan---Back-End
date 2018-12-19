const express = require('express');
const router = express.Router();

const Dishes = require('../models/dishes');
const Order = require('../models/order');
const Restaurant = require('../models/restaurants');

const { isLoggedIn } = require('../helpers/middlewares');

router.get('/',  isLoggedIn(), (req, res, next) => {
  Dishes.find({})
  .then((results) => {
    if (!results) {
      return res.status(404).json({
        error: 'not-found'
      });
    }
    return res.status(200).json(results);
  })
  .catch(next);
});

router.post('/save',  isLoggedIn(), (req, res, next) => {
  const newOrder = new Order();
  newOrder.dishes = req.body;
  for(let i = 0; i < newOrder.dishes.length; i++) {
    newOrder.dishes[i].qty = req.body[i].quantity;
  }
  console.log(newOrder)
  return newOrder.save().then((result) => {
    res.json(newOrder);
  })
  .catch(next);
});


router.get('/restaurant',  isLoggedIn(), (req, res, next) => {
  Restaurant.find({})
  .then((results) => {
    if (!results) {
      return res.status(404).json({
        error: 'not-found'
      });
    }
    return res.status(200).json(results);
  })
  .catch(next);
});

router.get('/:id',  isLoggedIn(), (req, res, next) => {
  const id = req.params.id;
  const dishes = [];
  Order.findById(id)
  .then((results) => {
    if (!results) {
      return res.status(404).json({
        error: 'not-found'
      });
    }
    const waitForDishes = results.dishes.map((dish) => {
      return Dishes.findById(dish._id)
        .then((result => {
          if (!results) {
            return res.status(404).json({
              error: 'not-found'
            });
          }
          const item = {
            dish: result,
            qty: dish.qty
          }
          dishes.push(item)
        }))
        .catch(next);
    })
    
    Promise.all(waitForDishes).then(()  => {
      return res.status(200).json(dishes)
    })
  })
  .catch(next);
});




module.exports = router;