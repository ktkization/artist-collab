import React, { useState, useEffect } from 'react';
import { Grid, Search, Segment, Button } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';

import './SearchArtists.css';

const SearchArtists = () => {
  const [artists, setArtists] = useState([]);

  const getArtists = async (e, { value }) => {
    let response = await axios.get(`api/search?name=${value}`);
    setArtists(response.data);
  };

  return (
    <Segment className="search-container">
      <Grid columns={3} stackable>
        <Grid.Column stretched>
          <Search
            results={artists}
            onSearchChange={_.debounce(getArtists, 500)}
          />
        </Grid.Column>
        <Grid.Column stretched>
          <Search
            results={artists}
            onSearchChange={_.debounce(getArtists, 500)}
          />
        </Grid.Column>
        <Grid.Column stretched>
          <Button className="search-btn" content="Search" size="large" />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default SearchArtists;
