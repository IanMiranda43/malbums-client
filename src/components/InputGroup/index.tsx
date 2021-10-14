import React, {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

import Input from 'components/Input';

import { Container, Label, InputError } from './styles';

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
}

interface iLabel extends LabelHTMLAttributes<HTMLLabelElement> {
  value?: string;
}

interface iInputGroup {
  input: iInput;
  label?: iLabel;
  errorLabel?: {
    errorLabelId: string;
    errorMessage: string;
  };
}

function InputGroup({ input, label, errorLabel }: iInputGroup) {
  return (
    <Container>
      {label ? <Label htmlFor={input.id}>{label.value}</Label> : null}

      <Input {...input} required />

      {errorLabel ? (
        <InputError id={errorLabel?.errorLabelId} htmlFor={input.id}>
          {errorLabel?.errorMessage}
        </InputError>
      ) : null}
    </Container>
  );
}

export default InputGroup;
