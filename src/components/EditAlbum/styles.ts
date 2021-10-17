import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  overflow-y: auto;

  > div + div {
    margin-left: 20px;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    > div + div {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: center;
  align-items: center;

  border-radius: 25px;
  background: var(--gray);
`;

export const InputsCard = styled.div`
  width: 100%;
  display: flex;

  > div + div {
    margin-left: 20px;
  }

  @media (max-width: 880px) {
    flex-direction: column;

    > div + div {
      margin-left: 0;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CancelButton = styled(Button)`
  margin-left: auto;

  @media (max-width: 420px) {
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: 10px;

  @media (max-width: 420px) {
    margin-left: 0;
    margin-top: 15px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-top: 20px;

  @media (max-width: 420px) {
    flex-direction: column-reverse;
    margin: auto 0;
  }
`;
