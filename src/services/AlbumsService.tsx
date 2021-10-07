import React, { SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AlbumsRequestsService, { iAlbumResponse } from './AlbumsRequestsService';

function checkStoredAlbums() {
  const albums = localStorage.getItem('albums');

  if (albums) return JSON.parse(albums);
}

type albumsListType = iAlbumResponse[] | undefined | null;

interface iSetStoredAlbumsList {
  albumsList: albumsListType;
  setAlbumsList: React.Dispatch<SetStateAction<albumsListType>>;
}

export function setStoredAlbumsList(): iSetStoredAlbumsList {
  const [albumsList, setAlbumsList] =
    useState<albumsListType>(checkStoredAlbums);

  useEffect(() => {
    if (albumsList) {
      localStorage.setItem('albums', JSON.stringify(albumsList));
    }
    if (albumsList === null) {
      localStorage.removeItem('albums');
    }
  }, [albumsList]);

  return { albumsList, setAlbumsList };
}

const api = new AlbumsRequestsService();

export async function createAlbum(newAlbum: iAlbumResponse) {
  const { albumsList, setAlbumsList } = setStoredAlbumsList();

  const album = await api.createAlbum(newAlbum);

  if (album) {
    if (albumsList && albumsList.length > 0) {
      albumsList.push(album);
      setAlbumsList(albumsList);
    } else {
      setAlbumsList([album]);
    }

    const history = useHistory();
    return history.push('/app/list');
  }

  return { createdAlbum: newAlbum, albumsList: albumsList };
}
