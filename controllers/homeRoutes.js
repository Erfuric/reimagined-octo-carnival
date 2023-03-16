// main home path '/'

/// fetching from database with sequelize


// const express = require('express');
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const Playlist = require('../models/playlist');

// const app = express();

/*
// GET Route for hello world test
app.get('/', (req, res) =>
  console.log('hello underground world')
);
*/

// Homepage (withAuth) middleware
router.get('/', async (req, res) => {

  // withAuth  // <<< middleware method.

  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('login', {
      users,
      // Pass the logged in flag to the template
      //logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    // res.redirect('/api/playlist-routes');
    res.render('/login');
    return;
  }

  res.render('login');
});

router.get('/playlists', async (req, res) => {
  const playlistData = await Playlist.findAll({
    // include: [{ model: Song, User },],
  });
  const playlistAll = playlistData.map(obj => obj.get({plain: true}))
  res.render('playlist', { playlistAll })

});




module.exports = router;



