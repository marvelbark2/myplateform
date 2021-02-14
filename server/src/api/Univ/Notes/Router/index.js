/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const express = require('express');

const { EpvCoef } = require('../Model/EpvCoef');
const { EpvNote } = require('../Model/EpvNote');
const { EcueCoef } = require('../Model/EcueCoef');
const { EcueNote } = require('../Model/EcueNote');
const { UeModel } = require('../../Models/Ues');
const { UeNote } = require('../Model/UeNote');
const ctrl = require('../controllers/EcueNote');

const router = express.Router();

router.route('/epv/coef').post(ctrl.addEpvCoeff);
router.route('/epv').get(ctrl.listEpv);
router.route('/epv/:id').get(ctrl.readEpv);
router.route('/epv/form/:ecueId').get(ctrl.epvAllRequired);
router.route('/ecue/').get(ctrl.listEcueNote);
router.route('/ecue/list/:ecueId').get(ctrl.findEcueNote);
router.route('/ecue/epv/:ecueId').get(ctrl.listEpvCoef);
router.route('/ecue/:id').get(ctrl.readEcueNote);
router.route('/ue/').get(ctrl.listUeNote);
router.route('/ue/list/:ueId').get(ctrl.findUeNoteList);
router.route('/ue/:id').get(ctrl.readUeNote);

router.get('/epv-note/:ecueId', async (req, res, next) => {
  const { ecueId } = req.params;
  try {
    const noteList = await EpvNote.query().where(
      'ecue_id',
      '=',
      ecueId,
    );
    const ecueCoefDb = await EcueCoef.query().where(
      'ecue_id',
      '=',
      ecueId,
    );
    const ecueCoef = ecueCoefDb[0].coef;
    let ecueNote = 0;
    for (const noteEpv of noteList) {
      const epvCoef = await EpvCoef.query()
        .select('coef', 'id', 'epv_type_id')
        .where('ecue_id', ecueId)
        .where('epv_type_id', noteEpv.epv_type_id)
        .orderBy('id');
      const data = noteEpv.note * epvCoef[0].coef;
      ecueNote += data;
    }
    const noteEcue = ecueNote / ecueCoef;
    const note = noteEcue.toFixed(2);
    await EcueNote.query().insert({
      note,
      ecue_id: ecueId,
      active: true,
    });
    res.status(200).json({
      success: true,
      message: `Les notes de ECUE ${ecueId} est bien synchronise`,
    });
  } catch (error) {
    next(error);
  }
});
router.get('/ecue-note/:ueId', async (req, res, next) => {
  const { ueId } = req.params;
  try {
    const ue = await UeModel.query()
      .findById(ueId)
      .withGraphFetched('ecue');
    const { ecue } = ue;
    let note = 0;
    for (const ec of ecue) {
      const ecueNote = await EcueNote.query().where('ecue_id', ec.id);
      if (ecueNote.length !== 0) {
        note += parseFloat(ecueNote[0].note);
      } else {
        res.status(400).json({
          success: false,
          message: 'Completer les notes ECUEs',
        });
      }
    }
    const noteUe = note / ecue.length;
    await UeNote.query().insert({
      note: noteUe,
      ue_id: ueId,
      active: true,
    });
    res.status(200).json({
      success: true,
      message: `Les notes de UE ${ueId} est bien synchronise`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
