import styled from 'styled-components';

import { CheckmarkDoneCircle } from 'styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccessIcon = styled(CheckmarkDoneCircle)`
  width: 150px;
  height: 150px;
  margin-top: 40px;

  > path {
    color: var(--primary);
  }
`;
