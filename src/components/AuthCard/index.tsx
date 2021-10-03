import React from 'react';

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
  title: string;
  formAction: string;
  backButton: string;
  submitButton: string;
  formErrorMessage?: string;
}

const AuthCard: React.FC<iAuthCard> = ({
  children,
  title,
  formAction,
  backButton,
  submitButton,
  formErrorMessage,
}) => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>{title}</h2>
        </Title>

        <Form action={formAction} autoComplete="off">
          <Inputs>
            {children}

            <FormError className={formErrorMessage ? 'active' : ''}>
              {formErrorMessage}
            </FormError>
          </Inputs>

          <Buttons>
            <Button type="button" outlined>
              {backButton}
            </Button>
            <Button type="submit">{submitButton}</Button>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AuthCard;
