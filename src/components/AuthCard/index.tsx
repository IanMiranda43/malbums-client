import React, { FormEvent, ReactNode } from 'react';

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
  formAction: string;
  backButton: string;
  submitButton: string;
}

function AuthCard({
  children,
  title,
  formAction,
  backButton,
  submitButton,
}: iAuthCard) {
  const AuthRequest = useAuthContext();
  const history = useHistory();
  const { formError } = useAuthContext();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formAction === '/register') {
      const passwordInput = document.getElementById(
        'inputPassword',
      ) as HTMLInputElement;
      const confirmPasswordInput = document.getElementById(
        'inputConfirmPassword',
      ) as HTMLInputElement;

      if (passwordInput?.value !== confirmPasswordInput?.value) {
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
        return AuthRequest.setFormError('Passwords need to match');
      }

      passwordInput.classList.remove('error');
      confirmPasswordInput.classList.remove('error');
      AuthRequest.setFormError('');
    }
  }

  function handleButton() {
    if (backButton === 'Register') {
      history.push('/register');
    } else {
      history.push('/login');
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>{title}</h2>
        </Title>

        <Form
          action={formAction}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Inputs>
            {children}

            <FormError className={formError ? 'active' : ''}>
              {formError}
            </FormError>
          </Inputs>

          <Buttons>
            <Button type="button" outlined onClick={handleButton}>
              {backButton}
            </Button>
            <Button type="submit">{submitButton}</Button>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default AuthCard;
