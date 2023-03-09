const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const User = require('./User.js');

class Playlist extends Model {}

Playlist.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    playlist_name: {
        type: DataTypes.STRING, 
        primaryKey: true,
        notNull: true,
        validate: {
          len: 50
        }
    },
    creator: {
        data: DataTypes.STRING,
        notNull: true,
        references: {
            model: User,
            key: 'username'
        },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist',
  }
);

module.exports = Playlist;