import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  padding: 20px;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(450px, 80vw);

  margin: auto;
  padding: 20px 0;

  border-radius: 25px;
  background: var(--outline);
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 0 20px 12px;
  border-bottom: 2px solid var(--gray);

  > h2 {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-top: 1px solid var(--outline);
  padding: 20px 20px 0;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormError = styled.label`
  display: none;
  margin: 10px 0;
  color: var(--danger);
  font-weight: bold;
  font-size: 15px;

  &.active {
    display: block;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;

  margin-top: 20px;
  padding: 10px 0;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;

  > button + button {
    margin-left: 10px;
  }

  @media (max-width: 360px) {
    flex-direction: column;

    > button + button {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;
