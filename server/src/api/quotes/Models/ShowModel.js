const Model = require('../../../helpers/Models');

class ShowModel extends Model {
  static get tableName() {
    return 'shows';
  }
}
exports.ShowModel = ShowModel;
