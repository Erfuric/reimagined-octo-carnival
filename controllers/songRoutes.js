const router = require('express').Router();
const { Playlist, Song } = require('../models');

router.get('/playlist/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id, {
      include: [{ model: Song }],
    });
    res.render('songs', { playlist });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
