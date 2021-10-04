import React from 'react';

import Input from 'components/Input';

import { Container, InputError } from './styles';

interface iInputGroup {
  id: string;
  errorLabelId?: string;
  errorMessage?: string;
  type?: string;
  placeholder?: string;
}

function InputGroup({
  id,
  errorLabelId,
  errorMessage,
  type,
  placeholder,
}: iInputGroup) {
  return (
    <Container>
      <Input type={type} id={id} placeholder={placeholder} required />

      <InputError
        id={errorLabelId}
        htmlFor={id}
        className={errorMessage ? 'active' : ''}
      >
        {errorMessage}
      </InputError>
    </Container>
  );
}

export default InputGroup;
