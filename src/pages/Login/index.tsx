import React from 'react';

import LoginCard from 'components/LoginCard';
import Input from 'components/Input';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LoginCard
        title="Create your account"
        formAction="/register"
        formMethod="POST"
      >
        <Input type="name" placeholder="Type your name" autoComplete="off" />

        <Input type="email" placeholder="Type your email" />

        <Input type="password" placeholder="Type an password" />

        <Input type="password" placeholder="Confirm password" />
      </LoginCard>
    </Container>
  );
};

export default Login;
