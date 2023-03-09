// import models
const User = require('./User');
const Playlist = require('./Playlist')
const Song = require('./song')

// belongsTo
Playlist.belongsTo(User);

// hasOne
Song.hasOne(Playlist);

// hasMany
User.hasMany(Playlist);

Playlist.hasMany(Song);

module.exports = {
  Song,
  User,
  Playlist
};