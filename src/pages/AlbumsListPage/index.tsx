import React from 'react';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Body from 'components/Body';
import AddFirstAlbum from 'components/AddFirstAlbum';

function AlbumsListPage() {
  return (
    <Layout>
      <Header />

      <Body>
        <AddFirstAlbum />
      </Body>
    </Layout>
  );
}

export default AlbumsListPage;
