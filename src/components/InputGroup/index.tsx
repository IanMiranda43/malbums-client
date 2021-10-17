import React, {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

import Input from 'components/Input';

import { Container, Label, InputError } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
}

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  value?: string;
}

interface IInputGroup {
  input: IInput;
  label?: ILabel;
  errorLabel?: {
    errorLabelId: string;
    errorMessage: string;
  };
}

function InputGroup({ input, label, errorLabel }: IInputGroup) {
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
