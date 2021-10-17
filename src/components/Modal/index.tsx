import React, { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import { usePrivateContext } from 'contexts/PrivateContext';

import { Container, Card, Title, Body } from './styles';

export interface IModal {
  children: ReactNode;
  title?: string;
}

function Modal() {
  const { pathname } = useLocation();
  const cardRef = useRef({} as HTMLDivElement);
  const { modal, setModal } = usePrivateContext();

  useEffect(() => {
    setModal(undefined);
  }, [pathname, setModal]);

  function handleClose({ target }: MouseEvent<HTMLDivElement>) {
    const { current } = cardRef;

    if (!current.contains(target as Node)) {
      setModal(undefined);
    }
  }

  const Header = () => {
    return modal?.title ? (
      <Title>
        <h2>{modal?.title}</h2>
      </Title>
    ) : null;
  };

  return modal?.children ? (
    <Container className="show" onClick={handleClose}>
      <Card ref={cardRef}>
        <Header />

        <Body>{modal?.children}</Body>
      </Card>
    </Container>
  ) : null;
}

export default Modal;
