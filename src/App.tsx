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
import AlbumsListPage from 'pages/AlbumsListPage';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AuthRequestContextProvider>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </AuthRequestContextProvider>

        <Route path="/" exact component={HomePage} />

        <Route path="/first-album" component={FirstAlbumPage} />

        <Route path="/create" component={CreateAlbumPage} />

        <Route path="/list" component={AlbumsListPage} />
      </AuthContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
