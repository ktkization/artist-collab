import React, { useState, useEffect } from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';

 const Search = () => {

  const [artists, setArtists] = useState([]);

  useEffect(_ => {
    let artist = [];
    for (let i = 1; i <=10; i++) {
      artist.push({ key: `${i}`, text: `Artist ${i}` });
    }
    setArtists(artist);
  }, []);

  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column style={{ border: '1px solid pink' }}>
          <Dropdown
            placeholder="Search artist"
            fluid
            search
            selection
            options={artists}
          />
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid pink' }}>
          <Dropdown
            placeholder="Search artist"
            fluid
            search
            selection
            options={artists}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Search;
