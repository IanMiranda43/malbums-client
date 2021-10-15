import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Malbums, Home, List, Plus, ExitToApp } from 'styles/Icons';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100vh;
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

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
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

export const NavItem = styled(Link)`
  text-decoration: none;
  width: max-content;
  margin-top: 10px;
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
    margin-top: 20px;

    > strong {
      display: none;
    }
  }
`;

const CssIcon = css`
  height: 33px;
  width: 33px;
`;

export const MalbumsIcon = styled(Malbums)`
  height: 200px;
  width: 200px;
  margin: 20px auto 30px;

  > path {
    fill: var(--primary);
  }

  @media (max-width: 1200px) {
    ${CssIcon}
    margin: 10px;
  }
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
    font-size: 16px;
  }

  > span {
    margin-top: 6px;
    color: var(--light-gray);
  }
`;

export const ProfileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  align-items: center;
  padding: 15px 20px;
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
      fill: var(--danger);
    }
  }

  &:active {
    opacity: 0.8;
  }
`;
