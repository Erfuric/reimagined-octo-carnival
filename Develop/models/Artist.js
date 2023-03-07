const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const SongTitle = require('./SongTitle.js');

class Artist extends Model {}

Artist.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    artist_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      NotNull: true
    },
    artists_songs: {
    type: DataTypes.STRING,
    references: {
        model: SongTitle,
        key: 'title'
    }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'artist',
  }
);

module.exports = Artist;