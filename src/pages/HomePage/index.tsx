import React from 'react';

import { Container, Card, PlusButton, ListIcon, PlusIcon } from './styles';

function HomePage() {
  return (
    <Container>
      <Card>
        <strong>Create an new CD</strong>

        <PlusButton to="/app/create">
          <PlusIcon />
        </PlusButton>
      </Card>

      <Card>
        <strong>List my CD`s</strong>

        <PlusButton to="/app/list">
          <ListIcon />
        </PlusButton>
      </Card>
    </Container>
  );
}

export default HomePage;
