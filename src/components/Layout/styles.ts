import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: min(800px, 100%);
  height: 100%;
  overflow-x: hidden;

  @media (min-width: 551px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }

  @media (max-width: 550px) {
    padding-bottom: 62px;
  }
`;
