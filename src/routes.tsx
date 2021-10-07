import React, { useContext } from 'react';
import {
  Route,
  Redirect,
  RouteChildrenProps,
  RouteProps,
} from 'react-router-dom';

import { AuthContext } from 'contexts/AuthContext';

import { AuthRequestContextProvider } from 'contexts/AuthRequestContext';

import Login from 'pages/Login';
import Register from 'pages/Register';

import HomePage from 'pages/HomePage';
import FirstAlbumPage from 'pages/FirstAlbumPage';
import CreateAlbumPage from 'pages/CreateAlbumPage';
import AlbumsListPage from 'pages/AlbumsListPage';
import Layout from 'components/Layout';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const { user } = useContext(AuthContext);

  function ensureAuthentication({ location }: RouteChildrenProps) {
    if (user) {
      return children;
    }

    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...rest} render={ensureAuthentication} />;
}

export function PrivateRoutesGroup() {
  const url = '/app';

  return (
    <PrivateRoute path={url}>
      <Layout>
        <Route path={`${url}/`} exact component={HomePage} />

        <Route path={`${url}/first-album`} component={FirstAlbumPage} />

        <Route path={`${url}/create`} component={CreateAlbumPage} />

        <Route path={`${url}/list`} component={AlbumsListPage} />
      </Layout>
    </PrivateRoute>
  );
}

export function AuthenticationRoutesGroup() {
  return (
    <AuthRequestContextProvider>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </AuthRequestContextProvider>
  );
}
