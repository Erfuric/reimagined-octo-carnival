const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Artist = require('./Artist.js');
const Genre = require('./Genre.js');
const SongTitle = require('./SongTitle.js');
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
        model: SongTitle,
        key: 'title'
      }
    },
    artists: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
        model: Artist,
        key: 'artist_name'
      }  
    },
    genres: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
      model: Genre,
      key: 'genre_name'
      }
    },
    creator: {
        data: DataTypes.STRING,
        notNull: true,
        references: {
            model: User,
            key: 'username'
        },
        validate: {
        len: 30
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