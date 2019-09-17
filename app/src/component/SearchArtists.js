import React, { useState, useEffect } from 'react';
import { Grid, Search, Segment, Button } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';

import './SearchArtists.css';

const SearchArtists = ({ retrieveSelectedArtistIds }) => {
  const [loadingState, setLoadingState] = useState(false);
  const [artists, setArtists] = useState([]);
  const [selectedArtistIds, setSelectedArtistIds] = useState(new Set());

  // useEffect(() => {

  // }, [selectedArtistIds])

  const getArtists = async (e, { value }) => {
    setLoadingState(true);
    let response = await axios.get(`api/search?name=${value}`);
    setArtists(response.data);
    setLoadingState(false);
  };

  const getSelectedArtist = (e, { result }) => {
    setSelectedArtistIds(new Set([...[...selectedArtistIds], result.key]));
  };

  const sendArtistIds = e => {
    e.preventDefault();
    retrieveSelectedArtistIds([...selectedArtistIds]);
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
          <Button
            className="search-btn"
            content="Search"
            size="large"
            onClick={sendArtistIds}
          />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default SearchArtists;
