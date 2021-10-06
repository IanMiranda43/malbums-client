import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import { AuthContextProvider } from 'contexts/AuthContext';
import { AuthRequestContextProvider } from 'contexts/AuthRequestContext';

import Login from 'pages/Login';
import Register from 'pages/Register';

import HomePage from 'pages/HomePage';
import FirstAlbumPage from 'pages/FirstAlbumPage';
import CreateAlbumPage from 'pages/CreateAlbumPage';
import Layout from 'components/Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Layout>
          <Route path="/" exact component={HomePage} />

          <Route path="/first-album" component={FirstAlbumPage} />

          <Route path="/create" component={CreateAlbumPage} />
        </Layout>

        <AuthRequestContextProvider>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </AuthRequestContextProvider>
      </AuthContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
