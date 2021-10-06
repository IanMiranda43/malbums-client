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
      <NavItem to="/">
        <HomeIcon />
      </NavItem>

      <NavItem to="/list">
        <ListIcon />
      </NavItem>

      <NavItem to="/create">
        <PlusIcon />
      </NavItem>

      <NavItem to="/logout">
        <LogoutIcon />
      </NavItem>
    </Container>
  );
}

export default BottomMenu;
