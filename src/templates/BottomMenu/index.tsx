import React from 'react';

import { useNavigationContext } from 'contexts/NavigationContext';

import {
  Container,
  NavItem,
  HomeIcon,
  ListIcon,
  PlusIcon,
  LogoutButton,
  LogoutIcon,
} from './styles';

function BottomMenu() {
  const { NavHomeBtn, NavListBtn, NavCreateBtn, handleSingOutClick } =
    useNavigationContext();

  return (
    <Container>
      <NavItem to="/app" className={NavHomeBtn}>
        <HomeIcon />
      </NavItem>

      <NavItem to="/app/list" className={NavListBtn}>
        <ListIcon />
      </NavItem>

      <NavItem to="/app/create" className={NavCreateBtn}>
        <PlusIcon />
      </NavItem>

      <LogoutButton onClick={handleSingOutClick}>
        <LogoutIcon />
      </LogoutButton>
    </Container>
  );
}

export default BottomMenu;
