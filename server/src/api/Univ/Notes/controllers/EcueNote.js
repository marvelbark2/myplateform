/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const { UeModel } = require('../../Models/Ues');
const { EcueNote } = require('../Model/EcueNote');
const { EpvCoef } = require('../Model/EpvCoef');
const { EpvNote } = require('../Model/EpvNote');
const { UeNote } = require('../Model/UeNote');

exports.addEpvCoeff = async (req, res, next) => {
  try {
    const epvCoeffAdded = await EpvCoef.query().insert(req.body);
    res.status(200).json({
      success: true,
      data: epvCoeffAdded,
    });
  } catch (error) {
    next(error);
  }
};

exports.listEpv = async (req, res, next) => {
  try {
    const epvNote = await EpvNote.query();
    res.status(200).json({
      success: true,
      data: epvNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.addEpv = async (req, res, next) => {
  try {
    const epvNote = await EpvNote.query().insert(req.body);
    res.status(200).json({
      success: true,
      data: epvNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.epvAllRequired = async (req, res, next) => {
  try {
    let result = [];
    const epvCoef = await EpvCoef.query().where('ecue_id', req.params.ecueId).withGraphFetched('type');
    for (const coef of epvCoef) {
      const epvNote = await EpvNote.query().where('ecue_id', req.params.ecueId).where('epv_type_id', coef.type.id).withGraphFetched('epvType');
      if (epvNote.length !== 0) {
        epvNote.forEach((note) => result.push(note));
      } else {
        result.push({
          ecue_id: req.params.ecueId, epv_type_id: coef.type.id, note: null, active: true
        });
      }
    }
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.readEpv = async (req, res, next) => {
  try {
    const epvNote = await EpvNote.query().findById(req.params.id);
    res.status(200).json({
      success: true,
      data: epvNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.listEcueNote = async (req, res, next) => {
  try {
    const ecueNote = await EcueNote.query();
    res.status(200).json({
      success: true,
      data: ecueNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.findEcueNote = async (req, res, next) => {
  try {
    const ecueNote = await EpvNote.query().where(
      'ecue_id',
      req.params.ecueId,
    );
    res.status(200).json({
      success: true,
      data: ecueNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.listEpvCoef = async (req, res, next) => {
  try {
    const ecueCoef = await EpvCoef.query().where(
      'ecue_id',
      req.params.ecueId,
    );
    if (ecueCoef) {
      res.status(200).json({
        success: true,
        data: ecueCoef,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.readEcueNote = async (req, res, next) => {
  try {
    const ecueNote = await EcueNote.query().where('ecue_id', req.params.id);
    res.status(200).json({
      success: true,
      data: ecueNote[0],
    });
  } catch (error) {
    next(error);
  }
};

exports.listUeNote = async (req, res, next) => {
  try {
    const ecueNote = await UeNote.query();
    res.status(200).json({
      success: true,
      data: ecueNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.findUeNote = async (req, res, next) => {
  try {
    const ues = await UeModel.query()
      .findById(req.params.ueId)
      .withGraphFetched('ecue');
    let result = [];
    for (const ecue of ues.ecue) {
      const ecueNote = await EpvNote.query().where(
        'ecue_id',
        ecue.id,
      );
      ecueNote.forEach((note) => result.push(note));
    }
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.findUeNoteList = async (req, res, next) => {
  try {
    const ues = await UeModel.query()
      .findById(req.params.ueId)
      .withGraphFetched('ecues');
    let result = [];
    for (const ecue of ues.ecues) {
      const ecueNote = await EpvNote.query().where(
        'ecue_id',
        ecue.id,
      ).withGraphFetched('[ecue,epvType]');
      ecueNote.forEach((note) => result.push(note));
    }
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.readUeNote = async (req, res, next) => {
  try {
    const ueNote = await UeNote.query().where('ue_id', req.params.id);
    res.status(200).json({
      success: true,
      data: ueNote[0]
    });
  } catch (error) {
    next(error);
  }
};