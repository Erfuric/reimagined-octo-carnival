const router = require('express').Router();
const { User, Song } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const Playlist = require('../models/playlist');

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

router.get('/playlist', async (req, res) => {
  const playlistData = await Playlist.findAll({
    include: [{ model: Song, User },],
  });
  const playlistAll = playlistData.map(obj => obj.get({plain: true}))
  res.render('playlist', { playlistAll })
  // res.render('playlist');

});

// send newplaylist {{template}} on navbar click
router.get('/newplaylist', async (req, res) => {
  res.render('newplaylist');
})


module.exports = router;