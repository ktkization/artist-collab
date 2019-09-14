import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import SearchArtists from './component/SearchArtists';
import CollabedMusic from './component/CollabedMusic';

function App() {

  return (
    <Container>
      <Grid>
        <SearchArtists />
        <CollabedMusic />
      </Grid>
    </Container>
  );
}

export default App;
