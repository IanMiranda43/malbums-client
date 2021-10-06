import React, { useContext } from 'react';

import { Container, Body } from './styles';
import Header from 'components/Header';
import { AuthContext } from 'contexts/AuthContext';
import AddFirstAlbum from 'components/AddFirstAlbum';
import BottomMenu from 'components/BottomMenu';

function Main() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Header title={user.username + ' welcome to malbums'} />

      <Body>
        <AddFirstAlbum />
      </Body>

      <BottomMenu />
    </Container>
  );
}

export default Main;
