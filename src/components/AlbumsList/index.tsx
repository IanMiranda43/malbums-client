import React from 'react';

import { usePrivateContext } from 'contexts/PrivateContext';
import { IAlbumResponse } from 'api/AlbumsApi';
import EditAlbum from 'components/EditAlbum';
import ConfirmationCard from 'components/ConfirmationCard';

import {
  Container,
  Album,
  Body,
  Details,
  Item,
  Actions,
  EditButton,
  DeleteButton,
} from './styles';

interface IAlbumsList {
  albums: IAlbumResponse[];
}

function AlbumsList({ albums }: IAlbumsList) {
  const { setModal, setAlbumsList } = usePrivateContext();

  function handleEditAlbum(album: IAlbumResponse) {
    setModal({
      title: `Edit CD ${album.name}`,
      children: <EditAlbum album={album} />,
    });
  }

  function handleDeleteAlbum(album: IAlbumResponse) {
    const { id } = album;

    const deleteAlbum = () => {
      setAlbumsList((oldAlbums) =>
        oldAlbums?.filter((album) => {
          return album.id !== id;
        }),
      );
      setModal(undefined);
    };

    setModal({
      children: (
        <ConfirmationCard
          message={`Did you really want to delete the CD ${album.name}`}
          smallMessage="You will not be able to turn back"
          callbackFunction={deleteAlbum}
        />
      ),
    });
  }

  const AlbumsList = albums.map((album) => {
    const { id, name, artist, year, genre, total_time, created_at } = album;

    return (
      <Album key={id}>
        <Body>
          <Details>
            <Item>
              <span>Name:</span>
              <strong>{name}</strong>
            </Item>
            <Item>
              <span>Artist:</span>
              <strong>{artist}</strong>
            </Item>

            <Item>
              <span>Genre:</span>
              <strong>{genre}</strong>
            </Item>
          </Details>

          <Details>
            <Item>
              <span>Released at:</span>
              <strong>{year}</strong>
            </Item>

            <Item>
              <span>Total time:</span>
              <strong>{total_time} min</strong>
            </Item>
            <Item>
              <span>Added in:</span>
              <strong>{created_at}</strong>
            </Item>
          </Details>
        </Body>

        <Actions>
          <EditButton onClick={() => handleEditAlbum(album)}>Edit</EditButton>
          <DeleteButton
            outlined
            className="danger"
            onClick={() => handleDeleteAlbum(album)}
          >
            Delete
          </DeleteButton>
        </Actions>
      </Album>
    );
  });

  return <Container>{AlbumsList}</Container>;
}

export default AlbumsList;
