import styled, { css } from 'styled-components';

import { PlusCircle, List } from 'styles/Icons';

export const Container = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: center;
  align-items: center;

  padding: max(20px, min(10vw, 50px));
  border-radius: 25px;
  background: var(--gray);
  overflow: hidden;

  > strong {
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
  }
`;

const CssIcons = css`
  width: min(150px, max(10vw, 50px));
  height: min(150px, max(10vw, 50px));

  > path {
    fill: var(--white);
  }
`;

export const PlusIcon = styled(PlusCircle)`
  ${CssIcons}
`;

export const ListIcon = styled(List)`
  ${CssIcons}
`;

export const PlusButton = styled.button`
  display: flex;
  margin-top: max(20px, min(10vw, 70px));

  padding: 20px;
  border-radius: 50%;

  &:hover {
    background: var(--background-hover);

    > svg {
      > path {
        fill: var(--primary);
      }
    }
  }
  &:active {
    opacity: 0.8;
  }
`;
