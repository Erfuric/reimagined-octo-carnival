const { PlaylistSong } = require('../models');

const plSongData = [
    {
        playlist_id: 1,
        song_id: 5,
    },
    {
        playlist_id: 1,
        song_id: 6,
    },
    {
        playlist_id: 1,
        song_id: 8,
    },
    {
        playlist_id: 1,
        song_id: 10,
    },
    {
        playlist_id: 1,
        song_id: 27,
    },
    {
        playlist_id: 2,
        song_id: 1,
    },
    {
        playlist_id: 2,
        song_id: 15,
    },
    {
        playlist_id: 2,
        song_id: 17,
    },
    {
        playlist_id: 2,
        song_id: 28,
    },
    {
        playlist_id: 3,
        song_id: 5,
    },
    {
        playlist_id: 3,
        song_id: 11,
    },
    {
        playlist_id: 3,
        song_id: 15,
    },
    {
        playlist_id: 3,
        song_id: 10,
    },
    {
        playlist_id: 4,
        song_id: 12,
    },
    {
        playlist_id: 4,
        song_id: 22,
    },
    {
        playlist_id: 4,
        song_id: 23,
    },
    {
        playlist_id: 4,
        song_id: 27,
    },
    {
        playlist_id: 5,
        song_id: 6,
    },
    {
        playlist_id: 5,
        song_id: 15,
    },
    {
        playlist_id: 5,
        song_id: 16,
    },
    {
        playlist_id: 5,
        song_id: 20,
    },
    {
        playlist_id: 5,
        song_id: 21,
    },
];

const seedPlaylistSongs = () => PlaylistSong.bulkCreate(plSongData);

module.exports = seedPlaylistSongs;