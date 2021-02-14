const { UeModel } = require('../Models/Ues');

exports.getAllUes = async (req, res, next) => {
  try {
    const allUes = await UeModel.query().withGraphFetched('ecues');
    res.status(200).json({
      success: true,
      data: allUes,
    });
  } catch (error) {
    next(error);
  }
};

exports.addUe = async (req, res, next) => {
  const UeUser = req.body;
  try {
    const UeAdded = await UeModel.query().insert(UeUser);
    res.status(200).json({
      success: true,
      data: UeAdded,
    });
  } catch (error) {
    next(error.message);
  }
};
