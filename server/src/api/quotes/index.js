const express = require('express');

const quotes = require('./routes/quotes');

const actors = require('./routes/actors');

const shows = require('./routes/shows');

const router = express.Router();

router.use('/', quotes);
router.use('/actors', actors);
router.use('/shows', shows);

module.exports = router;
