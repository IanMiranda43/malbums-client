import React from 'react';

import Header from 'components/Header';
import Body from 'components/Body';
import AddFirstAlbum from 'components/AddFirstAlbum';

function AlbumsListPage() {
  return (
    <>
      <Header />

      <Body>
        <AddFirstAlbum />
      </Body>
    </>
  );
}

export default AlbumsListPage;
