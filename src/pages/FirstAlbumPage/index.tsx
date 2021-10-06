import React from 'react';

import Layout from 'components/Layout';
import AddFirstAlbum from 'components/AddFirstAlbum';
import Header from 'components/Header';
import Body from 'components/Body';

function FirstAlbumPage() {
  return (
    <Layout>
      <Header />

      <Body>
        <AddFirstAlbum />
      </Body>
    </Layout>
  );
}

export default FirstAlbumPage;
