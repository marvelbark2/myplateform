const { ActorModel } = require('../Models/ActorModel');
const resHandler = require('../../../helpers/resHandler');

exports.getListActors = async (req, res, next) => {
  try {
    const actorsList = await ActorModel.query();
    res.status(200).json({
      success: true,
      data: actorsList,
    });
  } catch (error) {
    next(error);
  }
};

exports.addActor = async (req, res, next) => {
  const actorBody = req.body;
  try {
    const actorCreated = await ActorModel.query().insert(actorBody);
    res.json({
      success: true,
      message: actorCreated,
    });
  } catch (e) {
    next(e);
  }
};

exports.getActor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = await ActorModel.query().findById(id);
    if ([actor].length !== 0) {
      resHandler.responseHandler(req, res, actor, 'data');
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
exports.editActor = (req, res) => {
  res.json({
    success: true,
    message: `Editting Actor where id is ${req.params.id}`,
  });
};

exports.deleteActor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const actorDelete = await ActorModel.query().deleteById(id);
    if (actorDelete) {
      res.status(200).json({
        success: true,
        data: actorDelete,
      });
    } else next();
  } catch (error) {
    next(error);
  }
};
