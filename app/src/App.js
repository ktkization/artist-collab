import React, { useState, useEffect } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';

import Search from './component/Search';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(_ => {
    axios
      .get('/api/test')
      .then(response => {
        setMsg(response.data);
      })
      .catch(ex => {
        console.error(ex);
      });
  });

  return (
    <Container>
      <Search />
    </Container>

  );
}

export default App;
