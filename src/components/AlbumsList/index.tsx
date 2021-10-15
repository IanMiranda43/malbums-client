import React from 'react';

import { usePrivateContext } from 'contexts/PrivateContext';
import { iAlbumResponse } from 'api/AlbumsApi';
import EditAlbum from 'components/EditAlbum';

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
  albums: iAlbumResponse[];
}

function AlbumsList({ albums }: IAlbumsList) {
  const { setModal, setAlbumsList } = usePrivateContext();

  function handleEditAlbum(album: iAlbumResponse) {
    setModal({
      title: `Edit CD ${album.name}`,
      children: <EditAlbum album={album} />,
    });
  }

  function handleDeleteAlbum(id: string) {
    setAlbumsList(
      albums.filter((album) => {
        return album.id !== id;
      }),
    );
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
            onClick={() => handleDeleteAlbum(id)}
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
