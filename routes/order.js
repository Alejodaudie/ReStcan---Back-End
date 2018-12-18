const express = require('express');
const router = express.Router();

const Dishes = require('../models/dishes');

const { isLoggedIn } = require('../helpers/middlewares');

router.get('/',  isLoggedIn(), (req, res, next) => {
  Dishes.find({})
  .then((results) => {
    if (!results) {
      return res.status(404).json({
        error: 'not-found'
      });
    }console.log('eiiis')
    return res.status(200).json(results);
  })
});

router.post('/add',  isLoggedIn(), (req, res, next) => {
  .then((results) => {
    if (!results) {
      return res.status(404).json({
        error: 'not-found'
      });
    }console.log('eiiis')
    return res.status(200).json(results);
  })
});

module.exports = router;