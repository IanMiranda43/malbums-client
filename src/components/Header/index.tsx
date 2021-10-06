import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';

import { Container, BackButton, BackIcon, Title } from './styles';

interface iHeader {
  title: string;
  handleButton?: () => void;
}

function Header({ title, handleButton }: iHeader) {
  const { user } = useContext(AuthContext);

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
        <span>{user.username}</span>
      </Title>
    </Container>
  );
}

export default Header;
