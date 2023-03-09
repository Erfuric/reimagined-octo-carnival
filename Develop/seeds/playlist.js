const { Playlist } = require('../models');

const playlistData = [
    {
        playlist_name: "NealeAust",
        playlist_songs_id: 1,
        user_id: 2,
    },
    {
        playlist_name: "Rockin",
        playlist_songs_id: 2,
        user_id: 8,
    },
    {
        playlist_name: "Country_Songs",
        playlist_songs_id: 3,
        user_id: 13,
    },
    {
        playlist_name: "Mix",
        playlist_songs_id: 4,
        user_id: 14,
    },
    {
        playlist_name: "Moondust",
        playlist_songs_id: 5,
        user_id: 19,
    },
];

const seedPlaylists = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylists;