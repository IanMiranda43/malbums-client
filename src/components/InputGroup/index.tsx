import React, { InputHTMLAttributes, RefObject } from 'react';

import Input from 'components/Input';

import { Container, InputError } from './styles';

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
}

interface iInputGroup {
  input: iInput;
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
