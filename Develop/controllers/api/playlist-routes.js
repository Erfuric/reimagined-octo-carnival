const router = require('express').Router();
const { Playlist, Song } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all playlists
    // be sure to include its associated songs
  await Playlist.findAll({
    attributes: ["id", "playlist_name"],
    include: [{
      model: Song,
      attributes: ["id", "song", "artist", "genre", "playlist_id"]
    }]
  })
  .then((playlists) => {
    res.json(playlists);
  })
});

router.get('/:id', async (req, res) => {
  // find one Playlist by its `id` value
  // be sure to include its associated songs
  await Playlist.findByPk(req.params.id, {
    attributes: ["id", "playlist_name"],
		include: [
			{
				model: Song,
        attributes: ["id", "song", "artist", "genre", "playlist_id"],
			}
		],
	})
  .then((playlists) => {
    res.json(playlists);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.post('/', async (req, res) => {
  // create a new playlist
  await Playlist.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
  .then(cat => Playlist.findByPk(req.params.id))
  .then((updatedPlaylist) => res.status(200).json(updatedPlaylist))
  .catch((err) => {res.json(err);});
});

router.put('/:id', async (req, res) => {
  // update a plsylist by its `id` value
  await Playlist.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
  .then(cat => Playlist.findByPk(req.params.id))
  .then((updatedPlaylist) => res.status(200).json(updatedPlaylist))
  .catch((err) => {res.json(err);});
});

router.delete('/:id', async (req, res) => {
  // delete a playlist by its `id` value
  await Playlist.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((rmvdPlaylist) => {
		res.json(`The playlist was removed from the database`);
	})
	.catch((err) => {
		res.json(err);
	});
});

module.exports = router;