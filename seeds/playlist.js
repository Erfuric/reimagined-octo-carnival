const { Playlist } = require('../models');

const playlistData = [
    {
        id: 1,
        playlist_name: "NealeAust",
        user_id: 1,
    },
    {
        id: 2,
        playlist_name: "Rockin",
        user_id: 2,
    },
    {
        id: 3,
        playlist_name: "Country_Songs",
        user_id: 3,
    }
];

const seedPlaylists = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylists;