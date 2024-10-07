const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: () => {
      const now = new Date();
      now.setDate(now.getDate() + 7);
      return now;
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = Task;
