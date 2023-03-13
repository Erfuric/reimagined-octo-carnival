const router = require('express').Router();
const { Playlist, Song } = require('../../models');

// The `/api/categories` endpoint

/* old find all
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
*/

router.get('/', async (req, res) => {
  // Find all playlists
  // Be sure to include its associated songs
  try {
    const playlistData = await Playlist.findAll({
      include: [{ model: Song }, { attributes: ["id", "song", "artist", "genre", "playlist_id"] }],
    });
    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* old find one
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
*/

router.get('/:id', async (req, res) => {
  // Find a single playlist by its `id`
  // Be sure to include its associated songs
  try {
    const playlistData = await Playlist.findByPk(req.params.id, {
      include: [{ model: Song }, { attributes: ["id", "song", "artist", "genre", "playlist_id"] }],
    });

    if (!playlistData) {
      res.status(404).json({ message: "No playlist found with that ID." });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* old create
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
*/

router.post('/', async (req, res) => {
  // Create a new playlist
  try {
    const playlistData = await Playlist.create({
      playlist_id: req.body.playlist_id,
    });
    res.status(200).json(playlistData);
  } catch (err) {
    res.status(400).json(err);
  }
});

/* old update route
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
*/

router.put('/:id', async (req, res) => {
  // Update a playlist by its `id` value
  try {
    const playlistData = await Playlist.update(
      {
        playlist_name: req.body.playlist_name,
      },
      {
        where: {
          playlist_id: req.params.playlist_id,
        },
      }
    );

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }

});

/* old delete
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
*/

router.delete('/:id', async (req, res) => {
  // delete a playlist by its `id` value
  try {
    const playlistData = await Playlist.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that ID.' });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;