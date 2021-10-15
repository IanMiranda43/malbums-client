import React from 'react';
import { usePrivateContext } from 'contexts/PrivateContext';

import { Container, SuccessIcon } from './styles';

interface ISuccessCard {
  message: string;
  timeout?: number;
}

function SuccessCard({ message, timeout }: ISuccessCard) {
  const { setModal } = usePrivateContext();
  setTimeout(() => setModal(undefined), timeout || 2000);

  return (
    <Container>
      <h2>{message}</h2>

      <SuccessIcon />
    </Container>
  );
}

export default SuccessCard;
