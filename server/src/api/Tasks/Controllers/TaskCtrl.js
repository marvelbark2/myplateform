const { TaskModel } = require('../Models/TaskModel');

exports.getListTasl = async (req, res, next) => {
  try {
    const taskList = await TaskModel.query();
    res.status(200).json({
      success: true,
      data: taskList
    });
  } catch (error) {
    next(error);
  }
};

exports.addTask = async (req, res, next) => {
  try {
    const data = req.body;
    const taskInserted = await TaskModel.query().insert(data);
    res.status(200).json({
      success: true,
      data: taskInserted
    });
  } catch (error) {
    next(error);
  }
};

exports.findTask = async (req, res, next) => {
  try {
    const task = await TaskModel.query().findById(req.params.id);
    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    next(error);
  }
};

exports.editTask = async (req, res, next) => {
  try {
    const data = req.body;
    const taskEdited = await TaskModel.query().patch(data);
    res.status(200).json({
      success: true,
      data: taskEdited
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const taskInserted = await TaskModel.query().deleteById(req.params.id);
    res.status(200).json({
      success: true,
      data: taskInserted
    });
  } catch (error) {
    next(error);
  }
};
