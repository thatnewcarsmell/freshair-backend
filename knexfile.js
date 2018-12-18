// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/freshair_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
