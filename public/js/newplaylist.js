
console.log('newplaylist script executed');

// Global variables

const createButtonEl = document.getElementById('create-button');
const playlistName = document.getElementById('playlist-name')
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name');
const genreData = document.querySelector('#genre-box');


// TODO: add event listener to submit button



createButtonEl.addEventListener('click', sugmah) 

function sugmah () { //submit event take form data

  // TODO: iterate through each form entry and send to database

  console.log(playlistName.value);
  // console.log(songName.value);
  // console.log(artistName.value);
  console.log(genreData.value);

  const yeebsObj = {
    playlist: playlistName,
    song: songName,
    artist: artistName
  }

  // need to POST the data to the back end. 

  const postReq = new XMLHttpRequest();
      postReq.open("POST", "/playlist_db"); // TODO: create this recieve route in homeroutes
      postReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      postReq.send(JSON.stringify(yeebsObj));

}; 
