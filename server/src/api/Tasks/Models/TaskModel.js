const Models = require('../../../helpers/Models');

class TaskModel extends Models {
  static get tableName() {
    return 'tasks';
  }
}

exports.TaskModel = TaskModel;
