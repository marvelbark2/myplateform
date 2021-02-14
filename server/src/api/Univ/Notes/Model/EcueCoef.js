const Models = require('../../../../helpers/Models');

class EcueCoef extends Models {
  static get tableName() {
    return 'ecue_coef';
  }
}

exports.EcueCoef = EcueCoef;
