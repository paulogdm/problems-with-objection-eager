const { Model } = require('objection')
const Knex = require('knex')

const config = require('./knexfile.js')['development']

const knex = Knex({
  client: 'mariasql',
  connection: config.connection,
  useNullAsDefault: true
})

Model.knex(knex)

module.exports = class Martian extends Model {
  static get tableName () {
    return 'Martian'.toLowerCase()
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: {type: 'integer'},
        name: {type: 'string', minLength: 1, maxLength: 255}
      }
    }
  }

  static get relationMappings () {
    // Import models here to prevent require loops.
    const Thing = require('./Thing')

    return {
      things: {
        relation: Model.HasManyRelation,
        modelClass: Thing,
        join: {
          from: 'martian.id',
          to: 'thing.martianid'
        }
      }
    }
  }
}
