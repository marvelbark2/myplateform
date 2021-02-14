const { ShowModel } = require('../Models/ShowModel');

exports.getListShows = async (req, res, next) => {
  try {
    const ShowList = await ShowModel.query();
    res.json({
      success: true,
      data: ShowList,
    });
  } catch (error) {
    next(error);
  }
};

exports.addShow = async (req, res, next) => {
  const showData = req.body;
  try {
    const show = await ShowModel.query().insert(showData);
    res.json({
      success: true,
      data: show,
    });
  } catch (error) {
    next(error);
  }
};

exports.getShow = async (req, res, next) => {
  const { id } = req.params;
  try {
    const show = await ShowModel.query().findById(id);
    if (show) {
      res.json({
        success: true,
        data: show,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.editShow = async (req, res, next) => {
  const { id } = req.params;
  const showData = req.body;
  try {
    const show = await ShowModel.query().findById(id);
    if (show) {
      await show.patch(showData);
      res.json({
        success: true,
        data: show,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteShow = async (req, res, next) => {
  const { id } = req.params;
  try {
    const ShowDelete = await ShowModel.query().deleteById(id);
    if (ShowDelete) {
      res.status(200).json({
        success: true,
        data: ShowDelete,
      });
    } else next();
  } catch (error) {
    next(error);
  }
};
