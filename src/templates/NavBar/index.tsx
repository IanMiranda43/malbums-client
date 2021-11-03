import React from 'react';

import { useAuthContext } from 'contexts/AuthContext';
import { usePrivateContext } from 'contexts/PrivateContext';

import { useNavigationContext } from 'contexts/NavigationContext';

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

function NavBar() {
  const { userData } = useAuthContext();
  const { albumsList } = usePrivateContext();
  const { NavHomeBtn, NavListBtn, NavCreateBtn, handleSingOutClick } =
    useNavigationContext();

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
          <strong>{userData?.username}</strong>
          <span>{albumsList?.length} CD`s</span>
        </ProfileData>

        <LogoutButton onClick={handleSingOutClick}>
          <LogoutIcon />
        </LogoutButton>
      </ProfileMenu>
    </Container>
  );
}

export default NavBar;
