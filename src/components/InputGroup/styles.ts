import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const CSSErrorLabels = css`
  display: none;
  margin: 5px 0 10px;
  color: var(--danger);
  font-weight: bold;
  font-size: 15px;

  &.active {
    display: block;
  }
`;

export const InputError = styled.label`
  ${CSSErrorLabels}
`;
