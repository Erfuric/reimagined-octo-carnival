const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Song extends Model {}

Song.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    title: {
      type: DataTypes.STRING,
      NotNull: true,
      primaryKey: true
    },
    artist: {
      type: DataTypes.STRING,
      notNull: true,
      primaryKey: true
    },
    genre: {
      type: DataTypes.STRING,
      notNull: true,
      primaryKey: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;