// page 1 route

// playlist route 2

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const playlistRoutes = require('./playlist-routes')

router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);

module.exports = router;