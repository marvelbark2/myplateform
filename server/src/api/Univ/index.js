const express = require('express');

const router = express.Router();

router.use('/', require('./Routers'));
router.use('/note', require('./Notes/Router'));

module.exports = router;
