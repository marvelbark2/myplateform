const express = require('express');

const router = express.Router();

const quotes = require('./quotes');

const tasks = require('./Tasks');

const univ = require('./Univ');

const users = require('./users');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use(
  '/quotes',
  quotes,
);
router.use(
  '/tasks',
  tasks,
);

router.use('/user', users);

router.use('/univ', univ);

module.exports = router;
