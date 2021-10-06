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
        <NavItem className="active">
          <HomeIcon />
          <strong>Home</strong>
        </NavItem>

        <NavItem>
          <ListIcon />
          <strong>My CD`s List</strong>
        </NavItem>

        <NavItem>
          <PlusIcon />
          <strong>Create CD</strong>
        </NavItem>
      </NavMenu>

      <ProfileMenu>
        <ProfileData>
          <strong>Ian Miranda</strong>
          <span>0 CD`s</span>
        </ProfileData>

        <LogoutButton>
          <LogoutIcon />
        </LogoutButton>
      </ProfileMenu>
    </Container>
  );
}

export default MenuBar;
