import styled from 'styled-components';

interface iInput {
  outlined?: boolean;
}

const Input = styled.input<iInput>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px;

  font-size: 15px;
  font-weight: bold;

  border-radius: 10px;
  background: var(--background);
  color: var(--white);
  border: 2px solid transparent;

  &:hover {
    background: var(--light-gray);
  }

  &:active {
    opacity: 0.8;
  }

  &:focus {
    border: 2px solid var(--primary);
  }
`;

export default Input;
