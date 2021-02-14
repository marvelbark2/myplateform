const Models = require('../../../../helpers/Models');

class UeNote extends Models {
  static get tableName() {
    return 'ue_note';
  }
}

exports.UeNote = UeNote;
