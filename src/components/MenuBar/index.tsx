import React, { useState } from 'react';

import {
  Container,
  SideAppIcon,
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
  const [NavHomeBtn, setNavHomeBtn] = useState<string>('active');
  const [NavListBtn, setNavListBtn] = useState<string>();
  const [NavCreateBtn, setNavCreateBtn] = useState<string>();

  function handleClick(path: string) {
    setNavHomeBtn('');
    setNavListBtn('');
    setNavCreateBtn('');

    if (path === '/') {
      setNavHomeBtn('active');
    } else if (path === '/list') {
      setNavListBtn('active');
    } else if (path === '/create') {
      setNavCreateBtn('active');
    }
  }

  return (
    <Container>
      <SideAppIcon />

      <NavMenu>
        <NavItem to="/" className={NavHomeBtn} onClick={() => handleClick('/')}>
          <HomeIcon />
          <strong>Home</strong>
        </NavItem>

        <NavItem
          to="/list"
          className={NavListBtn}
          onClick={() => handleClick('/list')}
        >
          <ListIcon />
          <strong>My CD`s List</strong>
        </NavItem>

        <NavItem
          to="/create"
          className={NavCreateBtn}
          onClick={() => handleClick('/create')}
        >
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
