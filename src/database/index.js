/* eslint-disable linebreak-style */
module.exports = {
  development: {
    username: 'steve',
    password: 'steve',
    database: 'cryptinvest',
    host: 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: 'steve',
    password: 'steve',
    database: 'cryptinvest_test',
    host: 'localhost',
    dialect: 'mysql',
  },
  'test ': {
    username: 'steve',
    password: 'steve',
    database: 'cryptinvest_test',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'CLEARDB_DATABASE_URL',
    username: 'steve',
    password: 'steve',
    database: 'cryptinvest',
    host: 'localhost',
    dialect: 'mysql',
  },
};
