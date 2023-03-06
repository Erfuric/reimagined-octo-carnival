const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Genre = require('./Genre');


class SongTitle extends Model {}

SongTitle.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = SongTitle;