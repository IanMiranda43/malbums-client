import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import { AuthContextProvider } from 'contexts/AuthContext';
import { AuthRequestContextProvider } from 'contexts/AuthRequestContext';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />

        <AuthRequestContextProvider>
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
        </AuthRequestContextProvider>
      </AuthContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
