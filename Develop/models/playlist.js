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
    songs: {
      type: DataTypes.STRING,
      NotNull: true,
      references: {
        model: Song,
        key: 'song'
      }
    },
    artists: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
        model: Song,
        key: 'artist'
      }  
    },
    genres: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
      model: Song,
      key: 'genre'
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