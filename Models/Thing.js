const { Model } = require('objection')

module.exports = class Thing extends Model {
  static get tableName () {
    return 'Thing'.toLowerCase()
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: {type: 'integer'},
        martianid: {type: ['integer', 'null']},
        name: {type: 'string', minLength: 1, maxLength: 255}
      }
    }
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Martian = require('./Martian')

    return {
      martian: {
        relation: Model.BelongsToOneRelation,
        modelClass: Martian,
        join: {
          from: 'martian.id',
          to: 'thing.martianid'
        }
      }
    }
  }
}
