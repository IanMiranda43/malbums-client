import React from 'react';

import Header from 'components/Header';
import Body from 'components/Body';
import AlbumsList from 'components/AlbumsList';

function AlbumsListPage() {
  return (
    <>
      <Header />

      <Body>
        <AlbumsList />
      </Body>
    </>
  );
}

export default AlbumsListPage;
