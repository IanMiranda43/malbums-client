import React from 'react';

import NavBar from 'templates/NavBar';
import Header from 'templates/Header';
import BottomMenu from 'templates/BottomMenu';
import Modal from 'components/Modal';

import { Container, Wrapper, Main, Body } from './styles';

interface iLayout {
  children: React.ReactNode;
}

function Layout({ children }: iLayout) {
  return (
    <Container>
      <Wrapper>
        <NavBar />

        <Main>
          <Header />

          <Body>{children}</Body>

          <BottomMenu />
        </Main>

        <Modal />
      </Wrapper>
    </Container>
  );
}

export default Layout;
