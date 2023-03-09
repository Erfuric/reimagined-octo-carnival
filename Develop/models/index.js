// import models
const Genre = require('./Genre');
const SongTitle = require('./SongTitle');
const Artist = require('./Artist');
const User = require('./User');
const Playlist = require('./Playlist')

// belongsTo
SongTitle.belongsTo(Genre);

Playlist.belongsTo(User);

// hasMany
Genre.hasMany(SongTitle);

User.hasMany(Playlist);

Playlist.hasMany(SongTitle);

Playlist.hasMany(Genre);

// Products belongToMany Tags (through ProductTag)
//Product.belongsToMany(Tag, {
//  through: {
//    model: ProductTag,
//    foreignKey: 'product_id'
//  }
//})

// Tags belongToMany Products (through ProductTag)
//Tag.belongsToMany(Product, {
//  through:{
//    model: ProductTag,
//    foreignKey: 'tag_id'
//  }
//})

module.exports = {
  Genre,
  SongTitle,
  Artist,
  User,
  Playlist
};