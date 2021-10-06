import React from 'react';

import { Container, Body } from './styles';
import Header from 'components/Header';
// import AddFirstAlbum from 'components/AddFirstAlbum';
import BottomMenu from 'components/BottomMenu';
import HomeCard from 'components/HomeCard';

function Main() {
  return (
    <Container>
      <Header title={'welcome to malbums'} />

      <Body>
        {/* <AddFirstAlbum /> */}
        <HomeCard />
      </Body>

      <BottomMenu />
    </Container>
  );
}

export default Main;
