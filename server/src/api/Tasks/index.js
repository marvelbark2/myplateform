const express = require('express');

const router = express.Router();

router.use('/', require('./routers/route'));

module.exports = router;
