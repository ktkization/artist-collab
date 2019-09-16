import React, { useState } from 'react';
import { Grid, Search, Segment, Button } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';

import './SearchArtists.css';

const SearchArtists = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [artists, setArtists] = useState([]);
  const [artistIds, setArtistIds] = useState([]);

  const getArtists = async (e, { value }) => {
    setLoadingState(true);
    let response = await axios.get(`api/search?name=${value}`);
    setArtists(response.data);
    setLoadingState(false);
  };

  const getSelectedArtist = async (e, { result }) => {
    setArtistIds([...artistIds, {id: result.key, name: result.title}]);
    console.log(artistIds);
  };

  return (
    <Segment className="search-container">
      <Grid columns={3} stackable>
        <Grid.Column stretched>
          <Search
            loading={loadingState}
            results={artists}
            onSearchChange={_.debounce(getArtists, 500)}
            onResultSelect={getSelectedArtist}
          />
        </Grid.Column>
        <Grid.Column stretched>
          <Search
            loading={loadingState}
            results={artists}
            onSearchChange={_.debounce(getArtists, 500)}
            onResultSelect={getSelectedArtist}
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
