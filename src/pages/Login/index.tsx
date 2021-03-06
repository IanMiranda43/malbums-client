import React, { FormEvent } from 'react';

import { useAuthContext } from 'contexts/AuthContext';
import { IUserLogin } from 'api/AuthenticationApi';
import getFormData from 'utils/getFormData';
import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';

function Login() {
  const { handleSingIn } = useAuthContext();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userData = getFormData<IUserLogin>(e.currentTarget);

    return handleSingIn(userData);
  }

  return (
    <AuthCard
      title="Sign in to your Malbums account"
      registerPage={false}
      formAttr={{ onSubmit: handleSubmit }}
    >
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
