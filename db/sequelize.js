const { Sequelize } = require('sequelize');
const path = require('path');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:  './db.sqlite3',
    logging: false,
  });

module.exports = sequelize;
