import React from 'react';

import { Container, Card, PlusButton, ListIcon, PlusIcon } from './styles';

function HomeCard() {
  return (
    <Container>
      <Card>
        <strong>Create an new CD</strong>

        <PlusButton>
          <PlusIcon />
        </PlusButton>
      </Card>

      <Card>
        <strong>List my CD`s</strong>

        <PlusButton>
          <ListIcon />
        </PlusButton>
      </Card>
    </Container>
  );
}

export default HomeCard;
