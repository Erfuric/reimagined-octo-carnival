const { Song } = require('../models');

const songData = [

    {
        song_title: "99 Luftballons",
        artist: "NENA",
        genre: "Pop",
    },
    {
        song_title: "Lavender House",
        artist: "Taylor Swift",
        genre: "Pop",
    },
    {
        song_title: "Purple Rain",
        artist: "Prince",
        genre: "Pop",
    },
    {
        song_title: "Billie Michael",
        artist: "Michael Jackson",
        genre: "Pop",
    },
    {
        song_title: "Married Ladies",
        artist: "Lady Princess",
        genre: "Pop",
    },
    {
        song_title: "Back In Black",
        artist: "AC/DC",
        genre: "Rock",
    },
    {
        song_title: "Thunderstruck",
        artist: "AC/DC",
        genre: "Rock",
    },
    {
        song_title: "Thunderstruck",
        artist: "Back In Black",
        genre: "Rock",
    },      
    {
        song_title: "Thunderstruck",
        artist: "Country Rock",
        genre: "Rock",
    },   
    {
        song_title: "Satisfaction",
        artist: "The Rolling Stones",
        genre: "Rock",
    },
    {
        song_title: "Heaven And Hell",
        artist: "Black Sabbath",
        genre: "Rock",
    },
    {
        song_title: "Badblood",
        artist: "The Young Offenders",
        genre: "Rock",
    },
    {
        song_title: "Big_Energy",
        artist: "Latto",
        genre: "Hip Hop/Rap",
    },
    {
        song_title: "Spaced Out",
        artist: "StrTreck",
        genre: "Hip Hop/Rap",
    },
    {
        song_title: "Stand by Your Man",
        artist: "Tammy Wynette",
        genre: "Country",
    },
    {
        song_title: "Ring of Fire",
        artist: "Johnny Cash",
        genre: "Country",
    },
    {
        song_title: "Man in Black",
        artist: "Johnny Cash",
        genre: "Country"

    },
    {
        song: "Jolene",
        artist: "Dolly Parton",
        genre: " Country"
    },
    {
        song: "Jolene",
        artist: "Miranda Buff",
        genre: " Country"
    },
    {
        song: "Satin Doll",
        artist: "Count Basie",
        genre:  "Jazz",
    },
    {
        song: "Mr Lucky",
        artist: "John Lee Hooker",
        genre:  "Blues",
    },
    {
        song: "Cloud Exploration",
        artist: "Tom Vaylo",
        genre:  "Electronic",
    },
        {
        song: "Bolero",
        artist: "Melbourne Symphony Orchestra",
        genre:  "Classical",
    },
       {
        song: "Blowin' in the Wind",
        artist: "Bob Dylan",
        genre:  "Folk",
    },
    {
        song: "Buffalo Soldier",
        artist: "Bob Marley",
        genre:  "Reggae",
    },
      {
        song: "Chain of Fools",
        artist: "Aretha Franklin",
        genre:  "Soul",
    },
    {
        song: "Living In America",
        artist: "James Brown",
        genre:  "Funk",
    },
       {
        song: "Fade to Black",
        artist: "Metallica",
        genre:  "Metal",
    },
    {
        song: "Monalisa",
        artist: "Chris Brown",
        genre:  "R&B",
    },
    {
        song: "Mary Don't You Weep",
        artist: "Aretha Franklin",
        genre:  "Gospel",
    },
       {
        song: "We are the Beat",
        artist: "African World Singers",
        genre:  "World",
    },
      {
        song: "Time to Say Goodbye",
        artist: "Andrea Bocelli",
        genre:  "Opera",
    },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
