import styled from 'styled-components';

interface IButton {
  outlined?: boolean;
}

const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: max-content;

  border-radius: 25px;
  padding: 10px min(30px, max(10px, 10vw));
  border: 2px solid var(--primary);

  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis ellipsis;

  background: ${(props) => (props.outlined ? 'transparent' : 'var(--primary)')};
  color: ${(props) => (props.outlined ? 'var(--primary)' : 'var(--white)')};

  &:hover {
    background: ${(props) =>
      props.outlined ? 'var(--background-hover)' : 'var(--primary-hover)'};
  }

  &:active {
    opacity: 0.8;
  }

  &.danger {
    border: 2px solid var(--danger);
    background: ${(props) =>
      props.outlined ? 'transparent' : 'var(--danger)'};
    color: ${(props) => (props.outlined ? 'var(--danger)' : 'var(--white)')};
  }
`;

export default Button;
