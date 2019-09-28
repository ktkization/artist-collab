import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import SearchArtists from './component/SearchArtists';
import CollabedMusic from './component/CollabedMusic';

import './App.css';

function App() {
  const [selectedArtistIds, setSelectedArtistIds] = useState([]);

  const retrieveSelectedArtistIds = async artistData => {
    setSelectedArtistIds(artistData);
  };

  return (
    <React.Fragment>
      <div className="app-navbar">
        <h1>Artist Collab</h1>
      </div>
      <Container>
        <SearchArtists retrieveSelectedArtistIds={retrieveSelectedArtistIds} />
        {selectedArtistIds.length > 0 && (
          <CollabedMusic selectedArtistIds={selectedArtistIds} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
