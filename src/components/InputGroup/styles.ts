import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  margin-left: 10px;
  text-align: left;
  font-size: 16px;
`;

export const ErrorLabel = styled.label`
  margin: 5px 0 10px;
  color: var(--danger);
  font-weight: bold;
  font-size: 15px;
`;
