import React, { InputHTMLAttributes, RefObject, useCallback } from 'react';

import Input from 'components/Input';

import { Container, Label, ErrorLabel } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  ref?: RefObject<HTMLInputElement>;
}

interface IInputGroup {
  input: IInput;
  label?: string;
  errorLabel?: string;
}

function InputGroup({ input, label, errorLabel }: IInputGroup) {
  const LabelComponent = useCallback(() => {
    if (!label) {
      return null;
    }

    return <Label htmlFor={input.id}>{label}</Label>;
  }, [input, label]);

  const ErrorLabelComponent = useCallback(() => {
    if (!errorLabel) {
      return null;
    }

    return <ErrorLabel htmlFor={input.id}>{errorLabel}</ErrorLabel>;
  }, [input, errorLabel]);

  return (
    <Container>
      <LabelComponent />

      <Input {...input} required />

      <ErrorLabelComponent />
    </Container>
  );
}

export default InputGroup;
