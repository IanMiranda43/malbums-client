import React from 'react';

import MenuBar from 'components/MenuBar';
import BottomMenu from 'components/BottomMenu';

import { Container, Wrapper, Main } from './styles';

interface iLayout {
  children: React.ReactNode;
}

function Layout({ children }: iLayout) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />

        <Main>
          {children}

          <BottomMenu />
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Layout;
