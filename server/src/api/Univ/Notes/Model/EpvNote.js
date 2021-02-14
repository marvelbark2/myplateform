const Model = require('../../../../helpers/Models');
const { EcueModel } = require('../../Models/Ecue');
const { EpvType } = require('./EpvType');

class EpvNote extends Model {
  static get tableName() {
    return 'epv_note';
  }

  static get relationMappings() {
    return {
      ecue: {
        relation: Model.BelongsToOneRelation,
        modelClass: EcueModel,
        join: {
          from: 'ecues.id',
          to: 'epv_note.ecue_id',
        }
      },
      epvType: {
        relation: Model.BelongsToOneRelation,
        modelClass: EpvType,
        join: {
          from: 'epv_type.id',
          to: 'epv_note.epv_type_id',
        }
      }
    };
  }
}

exports.EpvNote = EpvNote;
