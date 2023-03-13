// main home path '/'

/// fetching from database with sequelize


const express = require('express');
const path = require('path');

const app = express();

// GET Route for homepage
app.get('/', (req, res) =>
  console.log('hello underground world')
);

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = app;



