import React from 'react';

import { useNavigationContext } from 'contexts/NavigationContext';
import { useAuthContext } from 'contexts/AuthContext';

import {
  Container,
  MalbumsIcon,
  NavMenu,
  NavItem,
  HomeIcon,
  ListIcon,
  PlusIcon,
  ProfileMenu,
  ProfileData,
  LogoutButton,
  LogoutIcon,
} from './styles';

function MenuBar() {
  const { NavHomeBtn, NavListBtn, NavCreateBtn } = useNavigationContext();
  const { handleSingOut } = useAuthContext();

  return (
    <Container>
      <MalbumsIcon />

      <NavMenu>
        <NavItem to="/app" className={NavHomeBtn}>
          <HomeIcon />
          <strong>Home</strong>
        </NavItem>

        <NavItem to="/app/list" className={NavListBtn}>
          <ListIcon />
          <strong>My CD`s List</strong>
        </NavItem>

        <NavItem to="/app/create" className={NavCreateBtn}>
          <PlusIcon />
          <strong>Create CD</strong>
        </NavItem>
      </NavMenu>

      <ProfileMenu>
        <ProfileData>
          <strong>Ian Miranda</strong>
          <span>0 CD`s</span>
        </ProfileData>

        <LogoutButton onClick={handleSingOut}>
          <LogoutIcon />
        </LogoutButton>
      </ProfileMenu>
    </Container>
  );
}

export default MenuBar;
