import React from 'react';
import usePersistedState from 'hooks/usePersistedState';
import { useHistory } from 'react-router-dom';
import AlbumsRequestsService, { iAlbumResponse } from 'api/AlbumsApi';

type albumsListType = iAlbumResponse[] | undefined;

const api = new AlbumsRequestsService();

export async function createAlbum(newAlbum: iAlbumResponse) {
  const [albumsList, setAlbumsList] = usePersistedState<albumsListType>(
    'albums',
    undefined,
  );

  const album = await api.create(newAlbum);

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
