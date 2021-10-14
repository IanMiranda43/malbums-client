import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import { AuthContextProvider } from 'contexts/AuthContext';
import { PrivateContextProvider } from 'contexts/PrivateContext';
import { NavigationContextProvider } from 'contexts/NavigationContext';
import { AuthenticationRoutesGroup, PrivateRoutesGroup } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AuthenticationRoutesGroup />

        <PrivateContextProvider>
          <NavigationContextProvider>
            <PrivateRoutesGroup />
          </NavigationContextProvider>
        </PrivateContextProvider>

        <Route path="/" exact render={() => <Redirect to="/app" />} />

        <GlobalStyles />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
