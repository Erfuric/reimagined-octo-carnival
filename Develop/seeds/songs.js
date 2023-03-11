const { Song } = require('../models');

const songData = [

    {
        song: "99 Luftballons",
        artist: "NENA",
        genre: "Pop",
        playlist_id: 1,
    },
    {
        song: "Lavender House",
        artist: "Taylor Swift",
        genre: "Pop",
        playlist_id: 1,
    },
    {
        song: "Purple Rain",
        artist: "Prince",
        genre: "Pop",
        playlist_id: 3,
    },
    {
        song: "Billie Michael",
        artist: "Michael Jackson",
        genre: "Pop",
        playlist_id: 4,
    },
    {
        song: "Married Ladies",
        artist: "Lady Princess",
        genre: "Pop",
        playlist_id: 4,
    },
    {
        song: "Back In Black",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 5,
    },
    {
        song: "Back In Black",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 6,
    },
    {
        song: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 1,
    },
    {
        song: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 4,
    },
    {
        song: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 5,
    },
    {
        song: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
        playlist_id: 6,
    },
    {
        song: "Satisfaction",
        artist: "The Rolling Stones",
        genre: "Rock",
        playlist_id: 3,
    },
    {
        song: "Heaven And Hell",
        artist: "Black Sabbath",
        genre: "Rock",
        playlist_id: 3,
    },
    {
        song: "Badblood",
        artist: "The Young Offenders",
        genre: "Rock",
        playlist_id: 3,
    },
    {
        song: "Spaced Out",
        artist: "StrTreck",
        genre: "Hip Hop/Rap",
        playlist_id: 4,
    },
    {
        song: "Spaced Out",
        artist: "StrTreck",
        genre: "Hip Hop/Rap",
        playlist_id: 5,
    },
    {
        song: "Spaced Out",
        artist: "StrTreck",
        genre: "Hip Hop/Rap",
        playlist_id: 6,
    },
    {
        song: "Ring of Fire",
        artist: "Johnny Cash",
        genre: "Country",
        playlist_id: 2,
    },
    {
        song: "Man in Black",
        artist: "Johnny Cash",
        genre: "Country",
        playlist_id: 2,
    },
    {
        song: "Jolene",
        artist: "Dolly Parton",
        genre: "Country",
        playlist_id: 5,
    },
    {
        song: "Jolene",
        artist: "Miranda Buff",
        genre: "Country",
        playlist_id: 5,
    },
    {
        song: "Jolene",
        artist: "Dolly Parton",
        genre: "Country",
        playlist_id: 6,
    },
    {
        song: "Jolene",
        artist: "Miranda Buff",
        genre: "Country",
        playlist_id: 6,
    },
    {
        song: "Take the Train",
        artist: "Duke Ellington",
        genre: "Jazz",
        playlist_id: 3,
    },
    {
        song: "Take the Train",
        artist: "Duke Ellington",
        genre: "Jazz",
        playlist_Id: 5,
    },
    {
        song: "Take the Train",
        artist: "Duke Ellington",
        genre: "Jazz",
        playlist_Id: 6,
    },
        {
        song: "The Thrill is Gone",
        artist: "B.B. King",
        genre: "Blues",
        playlist_id: 2,
    },
    {
        song: "Blowin in the Wind",
        artist: "Bob Dylan",
        genre: "Folk",
        playlist_id: 5,
    },
    {
        song: "Blowin in the Wind",
        artist: "Bob Dylan",
        genre: "Folk",
        playlist_id: 6,
    },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;