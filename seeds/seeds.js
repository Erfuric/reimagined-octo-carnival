const seedPlaylists = require('./playlist');
const seedSongs = require('./songs');
const { User } = require('../models');
const userData = require('./userdata.json');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
        });
        

    console.log('\n----- DATABASE SYNCED -----\n');    
  
    await seedPlaylists();
    console.log('\n----- PLAYLISTS SEEDED -----\n');

    await seedSongs();
    console.log('\n----- SONGS SEEDED -----\n');
  
    process.exit(0);
};

seedDatabase();