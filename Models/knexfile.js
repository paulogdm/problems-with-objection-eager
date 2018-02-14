// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      db: 'test',
      database: 'test',
      user: 'root',
      password: 'admin',
      charset: 'utf8'
    },
    useNullAsDefault: true
  },
  staging: {},
  production: {}
}
