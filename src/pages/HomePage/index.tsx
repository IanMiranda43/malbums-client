import React from 'react';

import Layout from 'components/Layout';
import HomeCard from 'components/HomeCard';
import Header from 'components/Header';
import Body from 'components/Body';

function HomePage() {
  return (
    <Layout>
      <Header />

      <Body>
        <HomeCard />
      </Body>
    </Layout>
  );
}

export default HomePage;
