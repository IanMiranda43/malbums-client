import React from 'react';

import { Container, Body } from './styles';
import Header from 'components/Header';
import AddFirstAlbum from 'components/AddFirstAlbum';
import BottomMenu from 'components/BottomMenu';

function Main() {
  return (
    <Container>
      <Header title={'welcome to malbums'} />

      <Body>
        <AddFirstAlbum />
      </Body>

      <BottomMenu />
    </Container>
  );
}

export default Main;
