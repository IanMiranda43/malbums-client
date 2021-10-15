import React from 'react';

import { usePrivateContext } from 'contexts/PrivateContext';
import { iAlbum } from 'api/AlbumsApi';
import InputGroup from 'components/InputGroup';

import {
  Container,
  Form,
  InputsCard,
  Column,
  Actions,
  CancelButton,
  SubmitButton,
} from './styles';

interface iEditAlbum {
  album: iAlbum;
}

function EditAlbum({ album }: iEditAlbum) {
  const { setModal } = usePrivateContext();

  function handleCancel() {
    setModal(undefined);
  }

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
                defaultValue: album?.name,
              }}
              label={{ value: 'CD name' }}
            />

            <InputGroup
              input={{
                id: 'artistInput',
                name: 'artist',
                placeholder: 'Type the artist name',
                defaultValue: album?.artist,
              }}
              label={{ value: 'Artist name' }}
            />

            <InputGroup
              input={{
                id: 'yearInput',
                name: 'year',
                placeholder: 'Type the launch year (yyyy)',
                type: 'number',
                minLength: 4,
                maxLength: 4,
                defaultValue: album?.year,
              }}
              label={{ value: 'Launch year' }}
            />
          </Column>

          <Column>
            <InputGroup
              input={{
                id: 'genreInput',
                name: 'genre',
                placeholder: 'Type the musical genre',
                defaultValue: album?.genre,
              }}
              label={{ value: 'Musical genre' }}
            />

            <InputGroup
              input={{
                id: 'totalTimeInput',
                name: 'total_time',
                placeholder: 'Type the total album time in minutes',
                type: 'number',
                defaultValue: album?.total_time,
              }}
              label={{ value: 'Total album time' }}
            />
          </Column>
        </InputsCard>

        <Actions>
          <CancelButton
            type="button"
            outlined
            className="danger"
            onClick={handleCancel}
          >
            Cancel
          </CancelButton>
          <SubmitButton type="button">Apply changes</SubmitButton>
        </Actions>
      </Form>
    </Container>
  );
}

export default EditAlbum;
