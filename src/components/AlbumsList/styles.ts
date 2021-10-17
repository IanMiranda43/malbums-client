import styled from 'styled-components';
import Button from 'components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  align-items: center;
`;

export const Album = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 25px;
  margin-bottom: 20px;

  border-radius: 15px;
  background: var(--outline);

  @media (max-width: 820px) {
    flex-direction: column;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: space-between;
  overflow: hidden;

  padding-left: 15px;
  border-left: 1px solid var(--light-gray);

  @media (min-width: 821) {
    &:last-child {
      border-right: 1px solid var(--light-gray);
    }
  }

  @media (min-width: 400px) {
    &:last-child {
      padding-right: 40px;
    }
  }

  @media (max-width: 450px) {
    &:first-child {
      border: none;
      padding-left: 0;
    }
  }

  @media (max-width: 350px) {
    padding: 0;
    border: none;
  }
`;

export const Item = styled.div`
  display: contents;
  align-items: flex-start;
  margin-bottom: 8px;

  > span {
    font-size: 13px;
    color: var(--light-gray);
    white-space: nowrap;
  }
  > strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const EditButton = styled(Button)`
  margin-left: 20px;

  @media (min-width: 821px) {
    width: 100%;
  }
`;

export const DeleteButton = styled(Button)`
  margin-left: auto;

  @media (min-width: 821px) {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 821px) {
    width: max-content;
    flex-direction: column;
    margin: auto 0;
    padding-left: 15px;

    > ${EditButton} {
      margin-left: 0;
      margin-bottom: 10px;
    }

    > ${DeleteButton} {
      margin-left: 0;
    }
  }
`;
