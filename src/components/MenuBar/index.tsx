import React from 'react';

import {
  Container,
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
  return (
    <Container>
      <NavMenu>
        <NavItem to="/" className="active">
          <HomeIcon />
          <strong>Home</strong>
        </NavItem>

        <NavItem to="/list">
          <ListIcon />
          <strong>My CD`s List</strong>
        </NavItem>

        <NavItem to="/create">
          <PlusIcon />
          <strong>Create CD</strong>
        </NavItem>
      </NavMenu>

      <ProfileMenu>
        <ProfileData>
          <strong>Ian Miranda</strong>
          <span>0 CD`s</span>
        </ProfileData>

        <LogoutButton to="/logout">
          <LogoutIcon />
        </LogoutButton>
      </ProfileMenu>
    </Container>
  );
}

export default MenuBar;
