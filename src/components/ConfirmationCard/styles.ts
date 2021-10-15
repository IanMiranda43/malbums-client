import styled from 'styled-components';

import Button from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 35px;

  > strong {
    margin-bottom: 10px;
    font-size: 19px;
    font-weight: 500;
  }

  > p {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 315px) {
    flex-direction: column-reverse;
  }
`;

export const CancelButton = styled(Button)`
  margin-right: 10px;

  @media (max-width: 315px) {
    margin-right: 0;
    margin-top: 10px;
  }
`;
