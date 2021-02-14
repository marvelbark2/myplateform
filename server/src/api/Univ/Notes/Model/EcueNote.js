const Models = require('../../../../helpers/Models');

class EcueNote extends Models {
  static get tableName() {
    return 'ecue_note';
  }
}

exports.EcueNote = EcueNote;
