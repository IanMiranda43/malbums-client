import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PlusCircle } from 'styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto 0;

  align-items: center;
  border-radius: 25px;
  background: var(--gray);
`;

export const Body = styled.div`
  padding: max(20px, min(10vw, 50px));
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  align-items: center;

  > strong {
    font-size: 20px;
  }
`;

export const PlusIcon = styled(PlusCircle)`
  width: min(200px, 30vw);
  height: min(200px, 30vw);

  > path {
    fill: var(--white);
  }
`;

export const PlusButton = styled(Link)`
  text-decoration: none;
  display: flex;
  margin-top: max(20px, min(10vw, 70px));

  padding: 20px;
  border-radius: 50%;

  &:hover {
    background: var(--background-hover);

    > ${PlusIcon} {
      > path {
        fill: var(--primary);
      }
    }
  }
  &:active {
    opacity: 0.8;
  }
`;
