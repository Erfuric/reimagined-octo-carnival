// import models
const User = require('./user');
const Playlist = require('./playlist')
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