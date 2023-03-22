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
        playlist_id: 1,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 1,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 1,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 1,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 1,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 1,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 2,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 2,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 2,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 2,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 2,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 2,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 2,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 2,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 3,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 3,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 3,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 3,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 3,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 3,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 3,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 3,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 4,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 4,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 4,
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
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 4,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 4,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 4,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 5,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 5,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 5,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 5,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 5,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 5,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 5,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 5,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 6,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 6,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 6,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 6,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 6,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 6,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 6,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 6,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 7,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 7,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 7,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 7,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 7,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 7,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 7,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 7,
    },
    {
        song: "song 1",
        artist: "artist 1",
        playlist_id: 8,
    },
    {
        song: "song 2",
        artist: "artist 2",
        playlist_id: 8,
    },
    {
        song: "song 3",
        artist: "artist 3",
        playlist_id: 8,
    },
    {
        song: "song 4",
        artist: "artist 4",
        playlist_id: 8,
    },
    {
        song: "song 5",
        artist: "artist 5",
        playlist_id: 8,
    },
    {
        song: "song 6",
        artist: "artist 6",
        playlist_id: 8,
    },
    {
        song: "song 7",
        artist: "artist 7",
        playlist_id: 8,
    },
    {
        song: "song 8",
        artist: "artist 8",
        playlist_id: 8,
    },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
