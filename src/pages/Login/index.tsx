import React from 'react';

import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';

function Login() {
  return (
    <AuthCard title="Sign in to your Malbums account">
      <InputGroup
        input={{
          type: 'email',
          id: 'inputEmail',
          name: 'email',
          placeholder: 'Type your email',
        }}
      />

      <InputGroup
        input={{
          type: 'password',
          id: 'inputPassword',
          name: 'password',
          placeholder: 'Type an password',
          minLength: 8,
        }}
      />
    </AuthCard>
  );
}

export default Login;
