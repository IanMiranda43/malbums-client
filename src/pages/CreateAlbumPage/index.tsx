import React from 'react';

import CreateAlbum from 'components/CreateAlbum';
import Header from 'components/Header';
import Body from 'components/Body';

function CreateAlbumPage() {
  return (
    <>
      <Header />

      <Body>
        <CreateAlbum />
      </Body>
    </>
  );
}

export default CreateAlbumPage;
