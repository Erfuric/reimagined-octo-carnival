const router = require('express').Router();
const { User } = require('../models');
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
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));


    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err)
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


router.post('/logout', (req, res) => {
  console.log('Logout route called');
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
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

router.get('/newplaylist', withAuth, async (req, res) => {
  res.render('newplaylist');
})


// post handle from cr8playlist button
router.post('/newplaylist', async (req, res) => {
  try {
    const newPlaylist = await Playlist.create({
      ...req.body,
      creator: req.session.user_id,
    });
    res.status(200).json(newPlaylist);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});


module.exports = router;