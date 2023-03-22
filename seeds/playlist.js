const { Playlist } = require('../models');

const playlistData = [
    {
        id: 1,
        playlist_name: "Rock Classics",
        genre: "Rock",
        user_id: 1,
    },
    {
        id: 2,
        playlist_name: "Hip Hop Jams",
        genre: "Hip Hop",
        user_id: 2,
    },
    {
        id: 3,
        playlist_name: "Country Favorites",
        genre: "Country",
        user_id: 3,
    },
    {
        id: 4,
        playlist_name: "EDM Party",
        genre: "Electronic Dance Music",
        user_id: 1,
    },
    {
        id: 5,
        playlist_name: "Throwback 90s",
        genre: "Pop",
        user_id: 2,
    },
    {
        id: 6,
        playlist_name: "R&B Grooves",
        genre: "R&B",
        user_id: 3,
    },
    {
        id: 7,
        playlist_name: "Acoustic Chill",
        genre: "Folk",
        user_id: 1,
    },
    {
        id: 8,
        playlist_name: "Workout Pump-Up",
        genre: "Pop",
        user_id: 2,
    },
];

const seedPlaylists = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylists;