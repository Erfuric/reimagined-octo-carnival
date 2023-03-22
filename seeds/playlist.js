const { Playlist } = require('../models');

const playlistData = [
    {
        id: 1,
        playlist_name: "test list 1",
        genre: "rock",
        user_id: 1,
    },
    {
        id: 2,
        playlist_name: "test list 2",
        genre: "pop",
        user_id: 2,
    },
    {
        id: 3,
        playlist_name: "test list 3",
        genre: "ligma",
        user_id: 3,
    }
];

const seedPlaylists = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylists;