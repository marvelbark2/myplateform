const express = require('express');

const router = express.Router();

const ActorController = require('../controllers/ActorsCtrl');

router.route('/')
  .get(ActorController.getListActors)
  .post(ActorController.addActor);

router.route('/:id')
  .get(ActorController.getActor)
  .post(ActorController.editActor)
  .delete(ActorController.deleteActor);

module.exports = router;
