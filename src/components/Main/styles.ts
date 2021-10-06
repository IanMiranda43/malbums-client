import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(800px, 100%);
  height: 100%;
  overflow-x: hidden;

  @media (min-width: 551px) {
    border-left: 2px solid var(--outline);
    border-right: 2px solid var(--outline);
  }
`;

export const Body = styled.div`
  height: 100%;
  padding: 20px;

  @media (min-width: 551px) {
    padding: 40px;
  }
`;
