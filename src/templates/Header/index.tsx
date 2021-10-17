import React, { useEffect, useState } from 'react';
import { useAuthContext } from 'contexts/AuthContext';
import { useHistory } from 'react-router';

import { Container, BackButton, BackIcon, Title } from './styles';

interface IHeader {
  handleButton?: () => void;
}

function Header({ handleButton }: IHeader) {
  const { userData } = useAuthContext();
  const history = useHistory();
  const { pathname } = history.location;
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    if (pathname === '/app/create') {
      setTitle('Create an new CD');
    } else if (pathname === '/app/list') {
      setTitle('My CD`s list');
    } else if (pathname === '/app/first-album') {
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
        <span>{userData?.username}</span>
      </Title>
    </Container>
  );
}

export default Header;
