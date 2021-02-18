const { SemestreModel } = require('../Models/Semestre');

exports.getAllSemestre = async (req, res, next) => {
  try {
    const Semestrers = await SemestreModel.query().withGraphFetched('ues.[ecues]');
    res.status(200).json({
      success: true,
      data: Semestrers,
    });
  } catch (error) {
    next(error.message);
  }
};

exports.addSemestre = async (req, res, next) => {
  try {
    const semestreUser = req.body;
    const semestreAdded = await SemestreModel.query().insert(
      semestreUser,
    );
    res.status(200).json({
      success: true,
      data: semestreAdded,
    });
  } catch (error) {
    next(error.message);
  }
};
