const Models = require('../../../../helpers/Models');
const { EpvType } = require('./EpvType');

class EpvCoef extends Models {
  static get tableName() {
    return 'epv_coef';
  }

  static get relationMappings() {
    return {
      type: {
        relation: Models.BelongsToOneRelation,
        modelClass: EpvType,
        join: {
          from: 'epv_type.id',
          to: 'epv_coef.epv_type_id',
        }
      }
    };
  }
}

exports.EpvCoef = EpvCoef;
