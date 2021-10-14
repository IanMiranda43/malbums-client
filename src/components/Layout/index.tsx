import React from 'react';

import MenuBar from 'components/MenuBar';
import BottomMenu from 'components/BottomMenu';

import { Container, Wrapper, Main } from './styles';
import Modal from 'components/Modal';

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

        <Modal />
      </Wrapper>
    </Container>
  );
}

export default Layout;
