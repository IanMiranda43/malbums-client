import React from 'react';

import Layout from 'components/Layout';
import CreateAlbum from 'components/CreateAlbum';
import Header from 'components/Header';
import Body from 'components/Body';

function CreateAlbumPage() {
  return (
    <Layout>
      <Header />

      <Body>
        <CreateAlbum />
      </Body>
    </Layout>
  );
}

export default CreateAlbumPage;
