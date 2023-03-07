// main home path '/'

/// fetching from database with sequelize


const express = require('express');
const path = require('path');

const app = express();

// GET Route for homepage
app.get('/', (req, res) =>
  console.log('hello underground world')
);


module.exports = app;



