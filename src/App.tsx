import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import { AuthContextProvider } from 'contexts/AuthContext';
import { NavigationContextProvider } from 'contexts/NavigationContext';
import { AuthenticationRoutesGroup, PrivateRoutesGroup } from './routes';
import { AuthRequestContextProvider } from 'contexts/AuthRequestContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AuthRequestContextProvider>
          <AuthenticationRoutesGroup />
        </AuthRequestContextProvider>

        <NavigationContextProvider>
          <PrivateRoutesGroup />
        </NavigationContextProvider>

        <Route path="/" exact render={() => <Redirect to="/app" />} />

        <GlobalStyles />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
