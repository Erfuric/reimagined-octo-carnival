const { Playlist } = require('../models');

const playlistData = [
    {
        playlist_name: "NealeAust",
        user_id: 2,
    },
    {
        playlist_name: "Rockin",
        user_id: 8,
    },
    {
        playlist_name: "Country_Songs",
        user_id: 13,
    },
    {
        playlist_name: "Mix",
        user_id: 14,
    },
    {
        playlist_name: "Moondust",
        user_id: 20,
    },
    {
        playlist_name: "Tornado99",
        user_id: 21,
    },
];

const seedPlaylists = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylists;