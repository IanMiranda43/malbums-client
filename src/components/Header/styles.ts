import styled from 'styled-components';

import { ArrowLeft } from 'styles/Icons';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 65px;

  padding: 10px 15px;
  border-bottom: 2px solid var(--outline);
  background: var(--background);
  align-items: center;
`;

export const BackIcon = styled(ArrowLeft)`
  width: 25px;
  height: 25px;

  > path {
    fill: var(--white);
  }
`;

export const BackButton = styled.button`
  padding: 10px;
  border-radius: 50%;

  &.hidden {
    display: none;
  }

  &:hover {
    background: var(--background-hover);

    > ${BackIcon} {
      > path {
        fill: var(--primary);
      }
    }
  }
  &:active {
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  > strong {
    font-size: 22px;
  }
  > span {
    margin-top: 3px;
    font-size: 14px;
    color: var(--light-gray);
  }
`;
