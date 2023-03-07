const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Genre extends Model {}

Genre.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    genre_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      NotNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'genre',
  }
);

module.exports = Genre;