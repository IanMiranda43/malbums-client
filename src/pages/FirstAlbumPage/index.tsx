import React from 'react';

import AddFirstAlbum from 'components/AddFirstAlbum';
import Header from 'components/Header';
import Body from 'components/Body';

function FirstAlbumPage() {
  return (
    <>
      <Header />

      <Body>
        <AddFirstAlbum />
      </Body>
    </>
  );
}

export default FirstAlbumPage;
