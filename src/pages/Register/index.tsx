import React from 'react';

import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';
import { useAuthRequestContext } from 'contexts/AuthRequestContext';

function Register() {
  const { passwordError } = useAuthRequestContext();

  return (
    <AuthCard title="Create your Malbums account" registerPage>
      <InputGroup
        input={{
          id: 'inputName',
          name: 'username',
          placeholder: 'Type your name',
        }}
      />

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
          className: passwordError,
        }}
      />

      <InputGroup
        input={{
          type: 'password',
          id: 'inputConfirmPassword',
          name: 'confirmPassword',
          placeholder: 'Type the same password again',
          minLength: 8,
          className: passwordError,
        }}
      />
    </AuthCard>
  );
}

export default Register;
