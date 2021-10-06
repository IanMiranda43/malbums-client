import React from 'react';

import InputGroup from 'components/InputGroup';

import { Container, Form, InputsCard, Column, SubmitButton } from './styles';

function CreateAlbum() {
  return (
    <Container>
      <Form autoComplete="off">
        <InputsCard>
          <Column>
            <InputGroup
              input={{
                id: 'nameInput',
                name: 'name',
                placeholder: 'Type the CD name',
              }}
            />

            <InputGroup
              input={{
                id: 'artistInput',
                name: 'artist',
                placeholder: 'Type the artist name',
              }}
            />

            <InputGroup
              input={{
                id: 'yearInput',
                name: 'year',
                placeholder: 'Type the launch year (yyyy)',
                type: 'number',
                minLength: 4,
                maxLength: 4,
              }}
            />
          </Column>

          <Column>
            <InputGroup
              input={{
                id: 'genreInput',
                name: 'genre',
                placeholder: 'Type the musical genre',
              }}
            />

            <InputGroup
              input={{
                id: 'totalTimeInput',
                name: 'total_time',
                placeholder: 'Type the total album time in minutes',
                type: 'number',
              }}
            />
          </Column>
        </InputsCard>

        <SubmitButton type="button">Create</SubmitButton>
      </Form>
    </Container>
  );
}

export default CreateAlbum;
