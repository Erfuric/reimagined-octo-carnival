const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Playlist = require('./Playlist.js');

class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      notNull: true,
      validate: {
        len: [30]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    playlists: {
      type: DataTypes.STRING,
      NotNull: true,
      reference: {
        model: Playlist,
        key: 'playlist_name'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;