require('dotenv').config();
const express = require('express');
const{getArtist, getCollabedTracks} = require('./api-service');

const app = express();

app.get('/api/search', async (req, res) => {
  let searchQuery = req.query['name'];
  let artists = await getArtist(searchQuery);
  res.json(artists);
});

app.get('/api/collabos', async (req, res) => {
  let [artistIdOne, artistIdTwo] = req.query['artistIds'].split(',');
  let collabedTracks = await getCollabedTracks(artistIdOne, artistIdTwo);
  res.json(collabedTracks);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
