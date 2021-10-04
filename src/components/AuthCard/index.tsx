import React, { FormEvent, ReactNode, useEffect } from 'react';

import Button from 'components/Button';

import {
  Container,
  Wrapper,
  Title,
  Form,
  Inputs,
  FormError,
  Buttons,
} from './styles';
import { useAuthContext } from 'contexts/AuthContext';
import { useHistory } from 'react-router-dom';

interface iAuthCard {
  children: ReactNode;
  title: string;
  registerPage?: boolean;
}

function AuthCard({ children, title, registerPage }: iAuthCard) {
  const AuthRequest = useAuthContext();
  const history = useHistory();
  const { formError } = useAuthContext();

  useEffect(() => {
    AuthRequest.setFormError();
  }, []);

  function handlePasswordMatch() {
    const passwordInput = document.getElementById(
      'inputPassword',
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      'inputConfirmPassword',
    ) as HTMLInputElement;

    if (passwordInput?.value !== confirmPasswordInput?.value) {
      passwordInput?.classList.add('error');
      confirmPasswordInput?.classList.add('error');
      AuthRequest.setFormError('Passwords need to match');

      return false;
    }

    passwordInput?.classList.remove('error');
    confirmPasswordInput?.classList.remove('error');
    AuthRequest.setFormError();

    return true;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (registerPage && handlePasswordMatch()) {
      return '';
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>{title}</h2>
        </Title>

        <Form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <Inputs>
            {children}

            <FormError className={formError ? 'active' : ''}>
              {formError}
            </FormError>
          </Inputs>

          <Buttons>
            <Button
              type="button"
              outlined
              onClick={() =>
                history.push(registerPage ? '/login' : '/register')
              }
            >
              {registerPage ? 'Sign in' : 'Register'}
            </Button>
            <Button type="submit">
              {registerPage ? 'Register' : 'Sign in'}
            </Button>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default AuthCard;
