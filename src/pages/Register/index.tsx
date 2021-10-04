import React from 'react';

import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';

function Register() {
  return (
    <AuthCard title="Create your Malbums account" registerPage>
      <InputGroup
        input={{
          id: 'inputName',
          name: 'username',
          placeholder: 'Type your Name',
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
        }}
      />

      <InputGroup
        input={{
          type: 'password',
          id: 'inputConfirmPassword',
          name: 'confirmPassword',
          placeholder: 'Type the same password again',
          minLength: 8,
        }}
      />
    </AuthCard>
  );
}

export default Register;
