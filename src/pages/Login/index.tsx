import React from 'react';

import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';
import {
  AuthRequestContextProvider,
  useAuthRequestContext,
} from 'contexts/LoginRequestContext';

const Login: React.FC = () => {
  const { formError, emailError, passwordError } = useAuthRequestContext();

  return (
    <AuthRequestContextProvider>
      <AuthCard
        title="Sign in to your MyMalbums account"
        formAction="/login"
        backButton="Register"
        submitButton="Sign in"
        formErrorMessage={formError}
      >
        <InputGroup
          type="email"
          id="inputEmail"
          errorLabelId="inputEmailError"
          placeholder="Type your email"
          errorMessage={emailError}
        />

        <InputGroup
          type="password"
          id="inputPassword"
          errorLabelId="inputPasswordError"
          placeholder="Type an password"
          errorMessage={passwordError}
        />
      </AuthCard>
    </AuthRequestContextProvider>
  );
};

export default Login;
