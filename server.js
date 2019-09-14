const express = require('express');
const axios = require('axios');

require('dotenv').config();

const getApiUrl = searchQuery => {return `https://api.deezer.com/search/artist?q="${searchQuery}"`}

const app = express();

app.get('/api/search', async (req, res) => {
  let searchQuery = req.query['name'];
  let response = (await axios.get(getApiUrl(searchQuery))).data;
  let artists = response.data.map( artist => {
    return { key: artist.id, title: artist.name }
  });  
  res.json(artists);
});

app.listen(5000, _ => {
  console.log('server running on port 5000');
});