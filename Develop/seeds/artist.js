const { Artist } = require('../models')

const artistData = [
    {
        artist_name: "NENA",
    },
    {
        artist_name: "Taylor Swift",
    },
    {
        artist_name: "Prince",
    },
    {
        artist_name: "Michael Jackson",
    },
    {
        artist_name: "Lady Princess",
    },
    {
        artist_name: "Ac/DC",
    },
    {
        artist_name: "Back in Black",
    },
    {
        artist_name: "Country Rock",
    },
    {
        artist_name: "The Rolling Stones",
    },
    {
        artist_name: "Black Sabboth",
    },
    {
        artist_name: "The Young Offenders",
    },
    {
        artist_name: "Latto",
    },
    {
        artist_name: "StrTreck",
    },
    {
        artist_name: "Tammy Wynette",
    },
    {
        artist_name: "Johnny Cash",
    },
    {
        artist_name: "Dolly Parton",
    },
    {
        artist_name: "Miranda Buff",
    },
    {
        artist_name: "Count Bassie",
    },
    {
        artist_name: "John Lee Hooker",
    },
    {
        artist_name: "Tom Vaylo",
    },
    {
        artist_name: "Melbourne Symphony Orchestra",
    },
    {
        artist_name: "Bob Dylan",
    },
    {
        artist_name: "Bob Marley",
    },
    {
        artist_name: "Aretha Frankin",
    },
    {
        artist_name: "James Brown",
    },
    {
        artist_name: "Metallica",
    },
    {
        artist_name: "Chris Brown",
    },
    {
        artist_name: "African World Singers",
    },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;