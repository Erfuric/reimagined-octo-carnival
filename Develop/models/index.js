// import models
const Genre = require('./Genre');
const SongTitle = require('./SongTitle');
const Artist = require('./Artist');
const User = require('./User');
const Playlist = require('./Playlist')

// belongsTo
SongTitle.belongsTo(Genre);

Artist.belongsTo(SongTitle);

Playlist.belongsTo(User);

// hasOne
SongTitle.hasOne(Artist);

// hasMany
Genre.hasMany(SongTitle);

Artist.hasMany(SongTitle);

User.hasMany(Playlist);

Playlist.hasMany(SongTitle);

Playlist.hasMany(Artist);

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