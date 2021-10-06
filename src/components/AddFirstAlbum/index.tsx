import React from 'react';

import { Container, Body, PlusButton, PlusIcon } from './styles';

function AddFirstAlbum() {
  return (
    <Container>
      <Body>
        <strong>You dont have any CD yet. Create your first one</strong>

        <PlusButton to="/create">
          <PlusIcon />
        </PlusButton>
      </Body>
    </Container>
  );
}

export default AddFirstAlbum;
