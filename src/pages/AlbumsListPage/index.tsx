import React from 'react';

import AlbumsList from 'components/AlbumsList';
import { usePrivateContext } from 'contexts/PrivateContext';
import AddFirstAlbum from 'components/AddFirstAlbum';

function AlbumsListPage() {
  const { albumsList } = usePrivateContext();

  if (!albumsList || !albumsList[0]?.id) {
    return <AddFirstAlbum />;
  }

  return <AlbumsList albums={albumsList} />;
}

export default AlbumsListPage;
