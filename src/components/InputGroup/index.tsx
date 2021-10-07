import React from 'react';

import Input from 'components/Input';

import { Container, InputError } from './styles';

interface iInputGroup {
  input: {
    type?: string;
    id: string;
    name: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    className?: string;
  };
  errorLabel?: {
    errorLabelId: string;
    errorMessage: string;
  };
}

function InputGroup({ input, errorLabel }: iInputGroup) {
  return (
    <Container>
      <Input {...input} required />

      <InputError
        id={errorLabel?.errorLabelId}
        htmlFor={input.id}
        className={errorLabel ? 'active' : ''}
      >
        {errorLabel?.errorMessage}
      </InputError>
    </Container>
  );
}

export default InputGroup;
