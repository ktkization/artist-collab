import React, { useState, useEffect } from 'react';
import { Item, Label, Segment, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

import './CollabedMusic.css';
import deezerIcon from '../assets/deezer-icon.png';

const CollabedMusic = ({ selectedArtistIds }) => {
  const [collabedTracks, setCollabedTracks] = useState([]);

  const fetchCollabedTracks = async () => {
    const tracks = (await axios.get(
      `/api/collabos?artistIds=${selectedArtistIds.join(',')}`
    )).data;
    setCollabedTracks(Object.values(tracks));
    console.log(tracks);
  };

  useEffect(() => {
    fetchCollabedTracks();
  }, [selectedArtistIds]);

  return (
    <Segment>
      <Dimmer>
        <Loader indeterminate>Loading Collabos...</Loader>
      </Dimmer>
      <Item.Group divided>
        {collabedTracks.map((track, index) => {
          return (
            <Item className="track" key={index}>
              <Item.Image size="tiny" src={track.cover} />
              <Item.Content>
                <Item.Header as="a">{track.title}</Item.Header>
                <div className="body">
                  <Item.Meta>
                    <p>
                      <strong>Album: </strong>
                      {track.album}
                    </p>
                    <span className="deezer-link">
                      <a
                        href={track.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Listen to full track on Deezer
                        <img src={deezerIcon} alt="Deezer Icon" />
                      </a>
                    </span>
                  </Item.Meta>
                  <Item.Description>
                    <audio controls>
                      <source src={track.sample} type="audio/mpeg"></source>
                    </audio>
                  </Item.Description>
                </div>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Segment>
  );
};

export default CollabedMusic;
