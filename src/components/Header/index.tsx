import React, { useEffect, useState } from 'react';
import { useAuthContext } from 'contexts/AuthContext';
import { useHistory } from 'react-router';

import { Container, BackButton, BackIcon, Title } from './styles';

interface iHeader {
  handleButton?: () => void;
}

function Header({ handleButton }: iHeader) {
  const { user } = useAuthContext();
  const history = useHistory();
  const { pathname } = history.location;
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    if (pathname === '/create') {
      setTitle('Create your CD');
    } else if (pathname === '/list') {
      setTitle('My CD`s list');
    } else if (pathname === '/first-album') {
      setTitle('Create your first CD');
    } else {
      setTitle('Welcome to Malbums');
    }
  }, [pathname]);

  return (
    <Container>
      <BackButton
        type="button"
        onClick={handleButton}
        className={!handleButton ? 'hidden' : ''}
      >
        <BackIcon />
      </BackButton>

      <Title>
        <strong>{title}</strong>
        <span>{user?.username}</span>
      </Title>
    </Container>
  );
}

export default Header;
