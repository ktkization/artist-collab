import React from 'react';
import { Item, Label, Segment } from 'semantic-ui-react';

const CollabedMusic = ({ selectedArtistIds }) => {
  return (
    <Segment>
      <Item.Group divided>
        <Item>
          <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">12 Years a Slave</Item.Header>
            <Item.Meta>
              <span className="cinema">Union Square 14</span>
            </Item.Meta>
            <Item.Description>Some description</Item.Description>
            <Item.Extra>
              <Label>IMAX</Label>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">12 Years a Slave</Item.Header>
            <Item.Meta>
              <span className="cinema">Union Square 14</span>
            </Item.Meta>
            <Item.Description>Some description</Item.Description>
            <Item.Extra>
              <Label>IMAX</Label>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default CollabedMusic;
