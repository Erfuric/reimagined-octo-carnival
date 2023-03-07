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
        song: "",
        artist: "",
        genre:  "Jazz",
    }
    {
        song: "",
        artist: "",
        genre:  "Jazz",
    }
    {
        song: "",
        artist: "",
        genre:  "Blues",
    }
    {
        song: "",
        artist: "",
        genre:  "Blues",
    }
    {
        song: "",
        artist: "",
        genre:  "Electronic",
    }
    {
        song: "",
        artist: "",
        genre:  "Electronic",
    }
    {
        song: "",
        artist: "",
        genre:  "Classical",
    }
    {
        song: "",
        artist: "",
        genre:  "Classical",
    }
    {
        song: "",
        artist: "",
        genre:  "Folk",
    }
    {
        song: "",
        artist: "",
        genre:  "Folk",
    }
    {
        song: "",
        artist: "",
        genre:  "Reggae",
    }
    {
        song: "",
        artist: "",
        genre:  "Reggae",
    }
    {
        song: "",
        artist: "",
        genre:  "Soul",
    }
    {
        song: "",
        artist: "",
        genre:  "Soul",
    }
    {
        song: "",
        artist: "",
        genre:  "Funk",
    }
    {
        song: "",
        artist: "",
        genre:  "Funk",
    }
    {
        song: "",
        artist: "",
        genre:  "Metal",
    }
    {
        song: "",
        artist: "",
        genre:  "Metal",
    }
    {
        song: "",
        artist: "",
        genre:  "R&B",
    }
    {
        song: "",
        artist: "",
        genre:  "R&B",
    }
    {
        song: "",
        artist: "",
        genre:  "Gospel",
    }
    {
        song: "",
        artist: "",
        genre:  "Gospel",
    }
    {
        song: "",
        artist: "",
        genre:  "World",
    }
    {
        song: "",
        artist: "",
        genre:  "World",
    }
    {
        song: "",
        artist: "",
        genre:  "Opera",
    }
    {
        song: "",
        artist: "",
        genre:  "Opera",
    }

]

const seedSongs = () => Product.bulkCreate(songData);

module.exports = seedSongs;
