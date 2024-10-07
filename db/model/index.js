const sequelize = require('../sequelize');
const User = require('./user')
const Task = require('./task')

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync({ alter: true })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database', err));

  module.exports = {
    User,
    Task,
    sequelize,
  };