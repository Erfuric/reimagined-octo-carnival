const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Artist = require('./Artist.js');
const Genre = require('./Genre.js');

class SongTitle extends Model {}

SongTitle.init(
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
      references: {
        model: Artist,
        key: 'artist_name'
      }
    },
    genre: {
      type: DataTypes.STRING,
      notNull: true,
      references: {
        model: Genre,
        key: 'genre_name'
      }  
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song_title',
  }
);

module.exports = SongTitle;