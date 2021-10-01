import React from 'react';

import Button from 'components/Button';
import { Container, Title, Content, Inputs, Buttons } from './styles';

interface iInputsCard {
  title: string;
  formAction: string;
  formMethod: string | 'GET' | 'POST';
}

const InputsCard: React.FC<iInputsCard> = ({
  children,
  title,
  formAction,
  formMethod,
}) => {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
      </Title>

      <Content action={formAction} method={formMethod}>
        <Inputs>{children}</Inputs>

        <Buttons>
          <Button type="button" outlined>
            Sing in
          </Button>
          <Button type="button">Register</Button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default InputsCard;
