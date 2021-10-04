import React, { ReactNode, useContext, useEffect } from 'react';

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

import { AuthRequestContext } from 'contexts/AuthRequestContext';
import { useHistory } from 'react-router-dom';

interface iAuthCard {
  children: ReactNode;
  title: string;
  registerPage?: boolean;
}

function AuthCard({ children, title, registerPage }: iAuthCard) {
  const { formError, setFormError, handleSubmit } =
    useContext(AuthRequestContext);
  const history = useHistory();

  useEffect(() => {
    setFormError();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>{title}</h2>
        </Title>

        <Form
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e, registerPage)}
        >
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
