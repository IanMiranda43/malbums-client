import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 550px) {
    margin: auto 0;
  }

  @media (min-width: 551px) {
    padding: 40px;
  }
`;
