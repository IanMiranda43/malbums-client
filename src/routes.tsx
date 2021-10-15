import React from 'react';
import {
  Route,
  Redirect,
  RouteChildrenProps,
  RouteProps,
} from 'react-router-dom';

import { useAuthContext } from 'contexts/AuthContext';

import Login from 'pages/Login';
import Register from 'pages/Register';

import Layout from 'templates/Layout';
import HomePage from 'pages/HomePage';
import FirstAlbumPage from 'pages/FirstAlbumPage';
import CreateAlbumPage from 'pages/CreateAlbumPage';
import AlbumsListPage from 'pages/AlbumsListPage';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const { userData } = useAuthContext();

  function ensureAuthentication({ location }: RouteChildrenProps) {
    if (userData) {
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
    <>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>
  );
}
