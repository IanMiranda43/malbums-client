import React from 'react';

import { Container } from './styles';

interface iBody {
  children: React.ReactNode;
}

function Body({ children }: iBody) {
  return <Container>{children}</Container>;
}

export default Body;
