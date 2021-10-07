import React from 'react';

import HomeCard from 'components/HomeCard';
import Header from 'components/Header';
import Body from 'components/Body';

function HomePage() {
  return (
    <>
      <Header />

      <Body>
        <HomeCard />
      </Body>
    </>
  );
}

export default HomePage;
