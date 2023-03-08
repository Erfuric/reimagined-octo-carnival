const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Song = require('./song.js');

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
    song_title: {
      type: DataTypes.STRING,
      NotNull: true,
      references: {
        model: Song,
        key: 'title'
      }
    },
    artist: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
        model: Song,
        key: 'artist'
      }
    },
    genre: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
        model: Song,
        key: 'genre'
      }
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