import React from 'react';

import { Container, Wrapper } from './styles';
import Main from 'components/Main';
import MenuBar from 'components/MenuBar';

function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />

        <Main />
      </Wrapper>
    </Container>
  );
}

export default Layout;
