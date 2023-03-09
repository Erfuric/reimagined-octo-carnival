const { PlaylistSong } = require('../models');

const plSongData = [
    {
        playlist_id: 1,
        number_of_songs: 6,
        song_id: 5,
    },
    {
        playlist_id: 1,
        number_of_songs: 5,
        song_id: 5,
    },
    {
        playlist_id: 1,
        number_of_songs: 4,
        song_id: 5,
    },
    {
        playlist_id: 1,
        number_of_songs: 9,
        song_id: 5,
    },
    {
        playlist_id: 1,
        number_of_songs: 3,
        song_id: 5,
    },
];

const seedPlaylistSongs = () => PlaylistSong.bulkCreate(plSongData);

module.exports = seedPlaylistSongs;