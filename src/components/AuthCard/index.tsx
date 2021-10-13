import React, { FormHTMLAttributes, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';

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

interface iAuthCard {
  children: ReactNode;
  title: string;
  registerPage: boolean;
  formAttr: FormHTMLAttributes<HTMLElement>;
  formError?: string;
}

function AuthCard({
  children,
  title,
  registerPage,
  formAttr,
  formError,
}: iAuthCard) {
  const history = useHistory();

  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>{title}</h2>
        </Title>

        <Form autoComplete="off" {...formAttr}>
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
