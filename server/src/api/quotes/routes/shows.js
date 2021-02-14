const express = require('express');

const router = express.Router();

const ShowsCtrl = require('../controllers/ShowsCtrl');

router.route('/')
  .get(ShowsCtrl.getListShows)
  .post(ShowsCtrl.addShow);

router.route('/:id')
  .get(ShowsCtrl.getShow)
  .patch(ShowsCtrl.editShow)
  .delete(ShowsCtrl.deleteShow);

module.exports = router;
