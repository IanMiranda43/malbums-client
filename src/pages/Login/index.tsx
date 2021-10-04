import React from 'react';

import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';

function Login() {
  return (
    <AuthCard title="Sign in to your Malbums account">
      <InputGroup type="email" id="inputEmail" placeholder="Type your email" />

      <InputGroup
        type="password"
        id="inputPassword"
        placeholder="Type an password"
      />
    </AuthCard>
  );
}

export default Login;
