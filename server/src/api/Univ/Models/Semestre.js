const Model = require('../../../helpers/Models');
const { UeModel } = require('./Ues');

class SemestreModel extends Model {
  static get tableName() {
    return 'semestre';
  }

  static get relationMappings() {
    return {
      ues: {
        relation: Model.HasManyRelation,
        modelClass: UeModel,
        join: {
          from: 'ues.semestre_id',
          to: 'semestre.id',
        },
      }
    };
  }
}
exports.SemestreModel = SemestreModel;
