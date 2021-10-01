import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Content = styled.form`
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

export const Buttons = styled.div`
  display: flex;
  width: 100%;

  padding: 10px 0;
  align-items: center;
  justify-content: space-evenly;
`;
