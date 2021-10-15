import React from 'react';

import { usePrivateContext } from 'contexts/PrivateContext';
import Button from 'components/Button';

import { Container, Body, Buttons, CancelButton } from './styles';

interface IConfirmationCard {
  message: string;
  smallMessage?: string;
  callbackFunction: () => any;
}

function ConfirmationCard({
  message,
  smallMessage,
  callbackFunction,
}: IConfirmationCard) {
  const { setModal } = usePrivateContext();

  return (
    <Container>
      <Body>
        <strong>{message}</strong>
        {smallMessage ? <p>{smallMessage}</p> : null}
      </Body>

      <Buttons>
        <CancelButton outlined onClick={() => setModal(undefined)}>
          Cancel
        </CancelButton>
        <Button className="danger" onClick={callbackFunction}>
          Yes
        </Button>
      </Buttons>
    </Container>
  );
}

export default ConfirmationCard;
