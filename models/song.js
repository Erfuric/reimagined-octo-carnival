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
    song: { // form box of SONG text
      type: DataTypes.STRING,
      NotNull: true,
      primaryKey: true
    },
    artist: { // form box of ARTIST text
      type: DataTypes.STRING,
      notNull: true,
      primaryKey: true
    },
    // genre: {
    //   type: DataTypes.STRING,
    //   notNull: true, 
    //   primaryKey: true
    // },
    playlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'playlist',
        key: 'id',
      },
    },
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