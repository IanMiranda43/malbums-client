import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  background: #00000099;
  padding: 20px;
`;

export const Card = styled.div`
  z-index: 11;
  display: flex;
  width: max-content;
  margin: auto;
  flex-direction: column;

  border-radius: 25px;
  background: var(--gray);
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 15px max(20px, min(10vw, 25px));
  border-bottom: 1px solid var(--light-gray);
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  padding: max(20px, min(10vw, 35px)) max(20px, min(10vw, 50px));
`;
