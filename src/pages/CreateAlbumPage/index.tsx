import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';

import getFormData from 'utils/getFormData';
import { IAlbum, IAlbumResponse } from 'api/AlbumsApi';
import InputGroup from 'components/InputGroup';

import { Container, Form, InputsCard, Column, SubmitButton } from './styles';
import { usePrivateContext } from 'contexts/PrivateContext';

function CreateAlbumPage() {
  const { albumsList, setAlbumsList } = usePrivateContext();
  const history = useHistory();

  async function handleCreateAlbum(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const albumData = getFormData<IAlbum>(e.currentTarget);

    const newAlbum = albumData as IAlbumResponse;

    newAlbum.id = Math.random().toString();
    newAlbum.created_at = new Date(
      new Date().toISOString(),
    ).toLocaleDateString();

    if (newAlbum) {
      if (albumsList && albumsList.length > 0) {
        setAlbumsList([...albumsList, newAlbum]);
      } else {
        setAlbumsList([newAlbum]);
      }

      return history.push('/app/list');
    }
  }

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleCreateAlbum}>
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

        <SubmitButton type="submit">Create</SubmitButton>
      </Form>
    </Container>
  );
}

export default CreateAlbumPage;
