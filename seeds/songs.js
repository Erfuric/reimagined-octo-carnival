const { Song } = require('../models');

const songData = [

    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 1,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 1,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 3,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 4,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 4,
    },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;