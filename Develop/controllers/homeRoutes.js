// main home path '/'

/// fetching from database with sequelize


// const express = require('express');
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');

// const app = express();

/*
// GET Route for hello world test
app.get('/', (req, res) =>
  console.log('hello underground world')
);
*/

// Homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;



