const Models = require('../../../../helpers/Models');

class EpvType extends Models {
  static get tableName() {
    return 'epv_type';
  }
}

exports.EpvType = EpvType;
