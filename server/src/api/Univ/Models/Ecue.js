const Model = require('../../../helpers/Models');
const { UeModel } = require('./Ues');

class EcueModel extends Model {
  static get tableName() {
    return 'ecues';
  }

  static get hidden() {
    return ['ue_id'];
  }

  static get relationMappings() {
    return {
      ue: {
        relation: Model.BelongsToOneRelation,
        modelClass: UeModel,
        join: {
          from: 'ues.id',
          to: 'ecues.ue_id',
        },
      }
    };
  }
}
exports.EcueModel = EcueModel;
