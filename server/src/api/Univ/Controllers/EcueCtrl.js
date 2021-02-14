const { EcueModel } = require('../Models/Ecue');

exports.getAllEcue = async (req, res, next) => {
  try {
    const listEcue = await EcueModel.query().withGraphFetched('ue');
    res.status(200).json({
      success: true,
      data: listEcue,
    });
  } catch (error) {
    next(error);
  }
};

exports.addEcue = async (req, res, next) => {
  const ecueUser = req.body;
  try {
    const ecueAdded = await EcueModel.query().insert(ecueUser);
    res.status(200).json({
      success: true,
      data: ecueAdded,
    });
  } catch (error) {
    next(error);
  }
};
