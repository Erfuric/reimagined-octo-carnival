const { Song } = require('../models');

const songData = [

    {
        song_title: "99 Luftballons",
        artist: "NENA",
        genre: "Pop",
        playlist_id: 1,
    },
    {
        song_title: "Lavender House",
        artist: "Taylor Swift",
        genre: "Pop",
        playlist_id:1,
    },
    {
        song_title: "Purple Rain",
        artist: "Prince",
        genre: "Pop",
        playlist_id:2,
    },
    {
        song_title: "Billie Michael",
        artist: "Michael Jackson",
        genre: "Pop",
        playlist: 3,
    },
    {
        song_title: "Billie Michael",
        artist: "Michael Jackson",
        genre: "Pop",
        playlist_id:4,
    },   
  
    {
        song_title: "Married Ladies",
        artist: "Lady Princess",
        genre: "Pop",
        playlist_id: 4,
    },
    {
        song_title: "Back In Black",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 5
    },
        {
        song_title: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 1,
    },
    {
        song_title: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 4,
    },      
    {
        song_title: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 5,
    },   
    {
        song_title: "Satisfaction",
        artist: "The Rolling Stones",
        genre: "Rock",
        playlist_id:3,
    },
   
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
