const router = require('express').Router();

const TasksCtrl = require('../Controllers/TaskCtrl');

router.route('/')
  .get(TasksCtrl.getListTasl)
  .post(TasksCtrl.addTask);

router.route('/:id')
  .get(TasksCtrl.findTask)
  .post(TasksCtrl.editTask)
  .delete(TasksCtrl.deleteTask);

module.exports = router;
