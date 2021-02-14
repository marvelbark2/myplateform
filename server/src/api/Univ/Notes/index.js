const express = require('express');

const router = express.Router();

router.use('/', require('./Router'));

module.exports = router;
