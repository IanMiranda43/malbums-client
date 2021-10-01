import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import Login from 'pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
