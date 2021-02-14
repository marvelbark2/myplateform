const Model = require('../../../helpers/Models');
const { ActorModel } = require('./ActorModel');
const { ShowModel } = require('./ShowModel');

class QuotesModel extends Model {
  static get tableName() {
    return 'quotes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['quote', 'actor', 'show'],
      properties: {
        id: { type: 'integer' },
        quote: { type: 'string', minLength: 1, maxLength: 255 },
        show: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            type: { type: 'string' },
          },
        },
        actor: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
          },
        },
      },
    };
  }

  static get hidden() {
    return ['actor_id', 'show_id'];
  }

  static get relationMappings() {
    return {
      actor: {
        relation: Model.BelongsToOneRelation,
        modelClass: ActorModel,
        join: {
          from: 'actors.id',
          to: 'quotes.actor_id',
        },
      },
      show: {
        relation: Model.BelongsToOneRelation,
        modelClass: ShowModel,
        join: {
          from: 'shows.id',
          to: 'quotes.show_id',
        },
      },
    };
  }
}

exports.QuotesModel = QuotesModel;
