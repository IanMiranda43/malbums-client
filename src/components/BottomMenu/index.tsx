import React from 'react';

import { useNavigationContext } from 'contexts/NavigationContext';
import { useAuthContext } from 'contexts/AuthContext';

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
  const { NavHomeBtn, NavListBtn, NavCreateBtn } = useNavigationContext();
  const { handleSingOut } = useAuthContext();

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

      <LogoutButton onClick={handleSingOut}>
        <LogoutIcon />
      </LogoutButton>
    </Container>
  );
}

export default BottomMenu;
