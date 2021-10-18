import React, { FormEvent, useCallback, useRef } from 'react';

import { usePrivateContext } from 'contexts/PrivateContext';
import { IAlbum, IAlbumResponse } from 'api/AlbumsApi';
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

interface IEditAlbum {
  album: IAlbumResponse;
}

function EditAlbum({ album }: IEditAlbum) {
  const submitRef = useRef<HTMLButtonElement>(null);
  const { setModal, albumsList, setAlbumsList } = usePrivateContext();
  const { id, name, artist, year, genre, total_time } = album;

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const albumData = getFormData<IAlbum>(e.currentTarget);
      const newAlbumData = { ...album, ...albumData };

      setAlbumsList(
        albumsList?.map((album) => {
          if (album.id === id) {
            return newAlbumData;
          }
          return album;
        }),
      );

      setModal({
        children: (
          <SuccessCard
            message={`The CD ${newAlbumData.name} has been successfully edited!`}
          />
        ),
      });
    },
    [album, setAlbumsList, setModal, albumsList, id],
  );

  const handleChange = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const oldAlbumData = { name, artist, year, genre, total_time };
      const newAlbumData = getFormData(e.currentTarget);

      if (JSON.stringify(oldAlbumData) === JSON.stringify(newAlbumData)) {
        return submitRef.current?.setAttribute('disabled', 'disabled');
      }

      return submitRef.current?.removeAttribute('disabled');
    },
    [name, artist, year, genre, total_time],
  );

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit} onChange={handleChange}>
        <InputsCard>
          <Column>
            <InputGroup
              label="CD name"
              input={{
                id: 'nameInput',
                name: 'name',
                placeholder: 'Type the CD name',
                defaultValue: name,
              }}
            />

            <InputGroup
              label="Artist name"
              input={{
                id: 'artistInput',
                name: 'artist',
                placeholder: 'Type the artist name',
                defaultValue: artist,
              }}
            />

            <InputGroup
              label="Launch year"
              input={{
                id: 'yearInput',
                name: 'year',
                placeholder: 'Type the launch year (yyyy)',
                type: 'number',
                minLength: 4,
                maxLength: 4,
                defaultValue: year,
              }}
            />
          </Column>

          <Column>
            <InputGroup
              label="Musical genre"
              input={{
                id: 'genreInput',
                name: 'genre',
                placeholder: 'Type the musical genre',
                defaultValue: genre,
              }}
            />

            <InputGroup
              label="Total album time"
              input={{
                id: 'totalTimeInput',
                name: 'total_time',
                placeholder: 'Type the total album time in minutes',
                type: 'number',
                defaultValue: total_time,
              }}
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
