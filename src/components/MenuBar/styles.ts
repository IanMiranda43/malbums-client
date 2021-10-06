import styled, { css } from 'styled-components';

import { Home, List, Plus, ExitToApp } from 'styles/Icons';

export const Container = styled.div`
  /* border-left: 1px solid var(--outline); */
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  background: var(--background);
  padding: 15px 10px;

  @media (max-width: 550px) {
    display: none;
  }

  @media (max-height: 280px) {
    display: none;
  }

  @media (max-width: 1200px) {
    align-items: center;
    width: 80px;
  }

  @media (min-width: 1201px) {
    align-items: left;
    width: 300px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;

  > div + div {
    margin-top: 10px;
  }
`;

const NavItemHighlight = css`
  > svg {
    > path {
      color: var(--primary);
      fill: var(--primary);
    }
  }

  > strong {
    color: var(--primary);
  }
`;

export const NavItem = styled.div`
  width: max-content;
  padding: 10px;
  border-radius: 15px;
  align-items: center;

  > strong {
    font-size: 15px;
    margin: 0 15px;
  }

  &.active {
    ${NavItemHighlight}
  }

  &:hover {
    background: var(--background-hover);
    cursor: pointer;

    ${NavItemHighlight}
  }

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    border-radius: 50%;

    > strong {
      display: none;
    }
  }
`;

const CssIcon = css`
  height: 33px;
  width: 33px;
`;

export const HomeIcon = styled(Home)`
  ${CssIcon}
`;

export const ListIcon = styled(List)`
  ${CssIcon}
`;

export const PlusIcon = styled(Plus)`
  ${CssIcon}
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;

  > strong,
  span {
    font-size: 15px;
  }

  > span {
    margin-top: 5px;
    color: var(--light-gray);
  }
`;

export const ProfileMenu = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 20px;
  border-radius: 15px;

  &:hover {
    background: var(--background-hover);
  }

  @media (max-width: 1200px) {
    padding: 10px;
    border-radius: 50%;

    > ${ProfileData} {
      display: none;
    }
  }
`;

export const LogoutIcon = styled(ExitToApp)`
  ${CssIcon}
`;

export const LogoutButton = styled.button`
  border-radius: 50%;

  &:hover {
    > ${LogoutIcon} {
      fill: var(--primary);
    }
  }

  &:active {
    opacity: 0.8;
  }
`;
