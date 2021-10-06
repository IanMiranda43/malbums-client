import React from 'react';

import {
  Container,
  NavItem,
  HomeIcon,
  ListIcon,
  PlusIcon,
  LogoutIcon,
} from './styles';

function BottomMenu() {
  return (
    <Container>
      <NavItem>
        <HomeIcon />
      </NavItem>

      <NavItem>
        <ListIcon />
      </NavItem>

      <NavItem>
        <PlusIcon />
      </NavItem>

      <NavItem>
        <LogoutIcon />
      </NavItem>
    </Container>
  );
}

export default BottomMenu;
