const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Song = require('./song.js');

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
    },
    song_id: {
      data: DataTypes.INTEGER,
      notNull: true,
      references: {
          model: Song,
          key: 'id'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
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