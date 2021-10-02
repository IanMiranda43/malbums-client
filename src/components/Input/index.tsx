import styled from 'styled-components';

interface iInput {
  outlined?: boolean;
}

const Input = styled.input<iInput>`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 10px;

  font-size: 15px;
  font-weight: bold;

  border-radius: 10px;
  background: var(--background);
  color: var(--white);

  &:hover {
    background: var(--light-gray);
  }

  &:active {
    opacity: 0.9;
  }
`;

export default Input;
