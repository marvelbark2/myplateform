const Model = require('../../../helpers/Models');
const { EcueModel } = require('./Ecue');

class UeModel extends Model {
  static get tableName() {
    return 'ues';
  }

  static get hidden() {
    return ['semestre_id'];
  }

  static get relationMappings() {
    return {
      ecues: {
        relation: Model.HasManyRelation,
        modelClass: EcueModel,
        join: {
          from: 'ecues.ue_id',
          to: 'ues.id',
        },
      }
    };
  }
}
exports.UeModel = UeModel;
