import React, { FormEvent, useRef } from 'react';

import { usePrivateContext } from 'contexts/PrivateContext';
import { iAlbumResponse, iAlbum } from 'api/AlbumsApi';
import getFormData from 'utils/getFormData';
import SuccessCard from 'components/SuccessCard';
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
  album: iAlbumResponse;
}

function EditAlbum({ album }: iEditAlbum) {
  const submitRef = useRef(null);
  const { setModal, albumsList, setAlbumsList } = usePrivateContext();
  const { id, name, artist, year, genre, total_time } = album;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const albumData = getFormData(e.currentTarget) as iAlbum;
    const newAlbumData = { ...album, ...albumData };

    setAlbumsList(
      albumsList?.map((album) => {
        if (album.id === id) {
          return newAlbumData;
        }
        return album;
      }) as iAlbumResponse[],
    );

    setModal({
      children: (
        <SuccessCard
          message={`The CD ${newAlbumData.name} has been successfully edited!`}
        />
      ),
    });
  }

  function formChanges(e: FormEvent<HTMLFormElement>) {
    const submitBtn = submitRef.current as unknown as HTMLButtonElement;
    const newAlbumData = getFormData(e.currentTarget);

    if (
      JSON.stringify({ name, artist, year, genre, total_time }) ===
      JSON.stringify(newAlbumData)
    ) {
      return submitBtn.setAttribute('disabled', 'disabled');
    }

    return submitBtn.removeAttribute('disabled');
  }

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit} onChange={formChanges}>
        <InputsCard>
          <Column>
            <InputGroup
              input={{
                id: 'nameInput',
                name: 'name',
                placeholder: 'Type the CD name',
                defaultValue: name,
              }}
              label={{ value: 'CD name' }}
            />

            <InputGroup
              input={{
                id: 'artistInput',
                name: 'artist',
                placeholder: 'Type the artist name',
                defaultValue: artist,
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
                defaultValue: year,
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
                defaultValue: genre,
              }}
              label={{ value: 'Musical genre' }}
            />

            <InputGroup
              input={{
                id: 'totalTimeInput',
                name: 'total_time',
                placeholder: 'Type the total album time in minutes',
                type: 'number',
                defaultValue: total_time,
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
            onClick={() => setModal(undefined)}
          >
            Cancel
          </CancelButton>
          <SubmitButton type="submit" ref={submitRef} disabled>
            Apply changes
          </SubmitButton>
        </Actions>
      </Form>
    </Container>
  );
}

export default EditAlbum;
