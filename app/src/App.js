import React, { useState, useEffect } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import SearchArtists from './component/SearchArtists';
import CollabedMusic from './component/CollabedMusic';

import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="app-navbar">
        <h1>Artist Collab</h1>
      </div>
      <Container style={{ marginTop: '100px' }}>
        <SearchArtists />
        {/* <CollabedMusic /> */}
      </Container>
    </React.Fragment>
  );
}

export default App;
