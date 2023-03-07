const { Genre } = require('../models');

const genreData = [
{
    genre_name:"Pop",
},
{
    genre_name:"Rock",
},
{
    genre_name: "Hip Hop/Rap",
},
{
    genre_name: "Country",
},
{
    genre_name: "Jazz",
},
{
    genre_name: "Blues",
},
{
    genre_name: "Electronic",
},
{
    genre_name: "Classical",
},
{
    genre_name: "Folk",
},
{
    genre_name: "Reggae",
},
{
    genre_name: "Soul",
},
{
    genre_name: "Funk",
},
{
    genre_name: "Metal",
},
{
    genre_name: "R&B",
},
{
    genre_name: "Gospel",
},
{
    genre_name: "World",
},
{
    genre_name: "Opera",
},
{
    genre_name: "Punk",    
},    
{
    genre_name: "Alternative",
},

];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;