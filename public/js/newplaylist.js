const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const e = require('express');
const app = express();

// TO DO: Logic and functions for creating new playlist including submit button 

const createButton = document.getElementById('create-button');
const playlistName = document.getElementById('playlist-name')
const songName = document.querySelector('.song-name');
const songNames = songName.value;

const songsArray = []

songNames.forEach(songNames => {
    songNames.push(songsArray);
});


for (let i = 0; i < songsArray.length; i++) {
    const songsList = songsArray[i];

    const newPlaylist = sequelize.define('newPlaylist', {
        // Define the columns of the table
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            notNull: true,
        playlist_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }});
      
      // Insert the data into the database
      newPlaylist.create({
        column1: playlistName,
        column2: songsList,
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });

    // songsList = [] // push each song and playlist name to sequelize database.. new table for each playlist?
    // table:
    // playlist name + id?
    // song names + ids?

};


