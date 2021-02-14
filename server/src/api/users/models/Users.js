const bcrypt = require('bcrypt');

const Model = require('../../../helpers/Models');

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);
    await this.hashPassword();
  }

  async hashPassword() {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }

  async isValidPassword(pass) {
    const compare = await bcrypt.compare(pass, this.password);

    return compare;
  }

  getResObj() {
    return { id: this.id, email: this.email };
  }
}

exports.Users = Users;
