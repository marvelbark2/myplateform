const Model = require('../../../helpers/Models');

class ActorModel extends Model {
  static get tableName() {
    return 'actors';
  }
}

exports.ActorModel = ActorModel;
