const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Song = require('./song.js');
const User = require('./user.js');

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
    playlist_name: { // get from playlist name form box
        type: DataTypes.STRING, 
        primaryKey: true,
        notNull: true,
    },
    genre: { // get form genre drop down
        type: DataTypes.STRING,
        notNull: true, 
         primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
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