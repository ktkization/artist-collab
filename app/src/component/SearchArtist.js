import React, { useState, useEffect } from 'react';
import { Grid, Search } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';

const SearchArtist = (e, {value}) => {
  const [artists, setArtists] = useState([]);

  const getArtists = async (e, { value }) => {
    let response = await axios.get(`api/search?name=${value}`);
    setArtists(response.data);
  };

  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Search
            fluid
            results={artists}
            onSearchChange={_.debounce(getArtists, 500)}
          />
        </Grid.Column>
        <Grid.Column>
          <Search
            fluid
            results={artists}
            onSearchChange={_.debounce(getArtists, 500)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SearchArtist;
