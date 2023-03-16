const router = require('express').Router();
const { User, Song } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const Playlist = require('../models/playlist');

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('playlist', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/logout', async (req, res) => {
  console.log('Logout route called');
  if (req.session.logged_in) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error during logout' });
      }
      res.clearCookie('connect.sid');
      // Redirect to the login page after successfully logging out
      res.redirect('/login');
    });
  } else {
    res.status(400).json({ message: 'You are not logged in' });
  }
});

router.get('/playlist', async (req, res) => {
  const playlistData = await Playlist.findAll({
    include: [{ model: Song, User }],
  });
  const playlistAll = playlistData.map((obj) => obj.get({ plain: true }));
  res.render('playlist', { playlistAll });
});

// Send newplaylist {{template}} on navbar click
router.get('/newplaylist', async (req, res) => {
  res.render('newplaylist');
});

module.exports = router;
