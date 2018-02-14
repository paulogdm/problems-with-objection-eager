exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('martian', function (table) {
      table.increments('id').primary()
      table.string('name').notNullable()
    }),

    knex.schema.createTable('thing', function (table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer('martianid').unsigned().nullable()

      table.foreign('martianid').references('martian.id')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('thing'),
    knex.schema.dropTableIfExists('martian')
  ])
}
