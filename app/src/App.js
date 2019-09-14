import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import SearchArtist from './component/SearchArtist';

function App() {

  return (
    <Container>
      <SearchArtist />
    </Container>
  );
}

export default App;
