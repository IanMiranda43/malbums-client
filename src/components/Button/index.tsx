import styled from 'styled-components';

interface iButton {
  outlined?: boolean;
}

const Button = styled.button<iButton>`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  padding: 10px min(30px, max(10px, 10vw));
  border: 2px solid var(--primary);
  overflow: hidden;
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;

  background: ${(props) => (props.outlined ? 'transparent' : 'var(--primary)')};
  color: ${(props) => (props.outlined ? 'var(--primary)' : 'var(--white)')};

  &:hover {
    background: ${(props) =>
      props.outlined ? 'var(--dark-hover)' : 'var(--primary-hover)'};
  }

  &:active {
    opacity: 0.8;
  }
`;

export default Button;
