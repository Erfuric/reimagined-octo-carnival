const router = require('express').Router();
const { User, Song } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const Playlist = require('../models/playlist');

router.post('/api/users/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.name,
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [{ model: Song, User }],
    });
    const playlistAll = playlistData.map((obj) => obj.get({ plain: true }));
    res.render('playlist', { playlistAll, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/playlist');
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

router.get('/playlist', withAuth, async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [{ model: Song, User }],
    });
    const playlistAll = playlistData.map((obj) => obj.get({ plain: true }));
    res.render('playlist', { playlistAll });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add new route to fetch songs for a playlist
router.get('/playlist/:id/songs', withAuth, async (req, res) => {
  try {
    const playlistData = await Playlist.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Song, User }],
    });
    const playlist = playlistData.get({ plain: true });
    res.json(playlist.Songs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/newplaylist', withAuth, async (req, res) => {
  res.render('newplaylist');
});

module.exports = router;
``
