const { Playlist } = require('../models');

const playlistData = [
    {
        id: 1,
        playlist_name: "test list 1",
        user_id: 1,
    },
    {
        id: 2,
        playlist_name: "test list 2",
        user_id: 2,
    },
    {
        id: 3,
        playlist_name: "test list 3",
        user_id: 3,
    }
];

const seedPlaylists = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylists;