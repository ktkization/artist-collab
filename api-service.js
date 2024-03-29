const axios = require('axios');

const apiEndpoint = searchQuery => {
  return `https://api.deezer.com/search/artist?q="${searchQuery}"`;
};

const artistEndpoint = (id, limit = 200) => {
  return `https://api.deezer.com/artist/${id}/top?limit=${limit}`;
};

const getArtist = async (searchQuery) => {
  let response = (await axios.get(apiEndpoint(searchQuery))).data;
  let artists = response.data.map(artist => {
    return {
      key: artist.id,
      title: artist.name,
      image: artist.picture
    };
  });

  return artists;
};

const getCollabedTracks = async (artistIdOne, artistIdTwo) => {
  let response = (await axios.get(artistEndpoint(artistIdOne))).data;

  let matchedTracks = response.data
    .map(track => {
      let contributorIds = track.contributors.map(contributor => {
        return parseInt(contributor.id);
      });

      if (contributorIds.includes(parseInt(artistIdTwo))) {
        return {
          id: track.id,
          title: track.title_short,
          link: track.link,
          sample: track.preview,
          album: track.album.title,
          cover: track.album.cover_big
        };
      }
    })
    .filter(track => {
      return track != null;
    });

  return matchedTracks;
};

module.exports = {
  getArtist,
  getCollabedTracks
};
