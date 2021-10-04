import React from 'react';

import AuthCard from 'components/AuthCard';
import InputGroup from 'components/InputGroup';

function Register() {
  return (
    <AuthCard title="Create your Malbums account" registerPage>
      <InputGroup id="inputName" placeholder="Type your Name" />

      <InputGroup type="email" id="inputEmail" placeholder="Type your email" />

      <InputGroup
        type="password"
        id="inputPassword"
        placeholder="Type an password"
      />

      <InputGroup
        type="password"
        id="inputConfirmPassword"
        placeholder="Type the same password again"
      />
    </AuthCard>
  );
}

export default Register;
