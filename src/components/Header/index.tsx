import React from 'react';

import { Container, BackButton, BackIcon } from './styles';

interface iHeader {
  title: string;
  handleButton?: () => void;
}

function Header({ title, handleButton }: iHeader) {
  return (
    <Container>
      <BackButton
        type="button"
        onClick={handleButton}
        className={!handleButton ? 'hidden' : ''}
      >
        <BackIcon />
      </BackButton>

      <strong>{title}</strong>
    </Container>
  );
}

export default Header;
