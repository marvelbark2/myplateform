const express = require('express');

const SemestreCtrl = require('../Controllers/SemestreCtrl');

const UeCtrl = require('../Controllers/UeCtrl');

const EcueCtrl = require('../Controllers/EcueCtrl');

const router = express.Router();

router
  .route('/semestre')
  .get(SemestreCtrl.getAllSemestre)
  .post(SemestreCtrl.addSemestre);

router
  .route('/ue')
  .get(UeCtrl.getAllUes)
  .post(UeCtrl.addUe);

router
  .route('/ecue')
  .get(EcueCtrl.getAllEcue)
  .post(EcueCtrl.addEcue);

module.exports = router;
