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

  &:hover {
    background: var(--light-gray);
  }

  &:active {
    opacity: 0.8;
  }
`;

export default Input;
