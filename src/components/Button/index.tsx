import styled from 'styled-components';

interface iButton {
  outlined?: boolean;
}

const Button = styled.button<iButton>`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 30px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid var(--primary);

  background: ${(props) => (props.outlined ? 'transparent' : 'var(--primary)')};
  color: ${(props) => (props.outlined ? 'var(--primary)' : 'var(--white)')};

  &:hover {
    background: ${(props) =>
      props.outlined ? 'var(--dark-hover)' : 'var(--primary-hover)'};
  }

  &:active {
    opacity: 0.9;
  }
`;

export default Button;
