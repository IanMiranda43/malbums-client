import React, { useRef, FormEvent, useEffect, useState } from 'react';

import { useAuthContext } from 'contexts/AuthContext';
import { IUserRegister } from 'api/AuthenticationApi';
import getFormData from 'utils/getFormData';
import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';

function Register() {
  const [formError, setFormError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const { handleCreateAccount } = useAuthContext();

  useEffect(() => {
    setFormError('');
    setPasswordError('');
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const passwordInput = passwordRef.current?.value;
    const confirmPasswordInput = confirmPasswordRef.current?.value;

    if (passwordInput === confirmPasswordInput) {
      const userData = getFormData<IUserRegister>(e.currentTarget);

      setFormError('');
      setPasswordError('');

      return handleCreateAccount(userData);
    }

    setPasswordError('error');
    setFormError('Passwords need to match');
  }

  return (
    <AuthCard
      title="Create your Malbums account"
      registerPage
      formAttr={{ onSubmit: handleSubmit }}
      formError={formError}
    >
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
          ref: passwordRef,
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
          ref: confirmPasswordRef,
        }}
      />
    </AuthCard>
  );
}

export default Register;
