import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Home, List, Plus, ExitToApp } from 'styles/Icons';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 62px;

  padding: 5px 15px;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--gray);
  background: var(--background);

  @media (min-width: 551px) {
    display: none;
  }
`;

const CssIcons = css`
  height: 30px;
  width: 30px;
`;

export const HomeIcon = styled(Home)`
  ${CssIcons}
`;

export const ListIcon = styled(List)`
  ${CssIcons}
`;

export const PlusIcon = styled(Plus)`
  ${CssIcons}
`;

export const LogoutIcon = styled(ExitToApp)`
  ${CssIcons}
`;

const NavItemHighlight = css`
  > svg {
    fill: var(--primary);
  }

  > ${PlusIcon} {
    > path {
      color: var(--primary);
    }
  }
`;

const NavItemCss = css`
  text-decoration: none;
  display: flex;
  padding: 10px;
  border-radius: 50%;

  &.active {
    ${NavItemHighlight}
  }

  &:hover {
    ${NavItemHighlight}
    background: var(--background-hover);

    > ${LogoutIcon} {
      fill: var(--danger);
    }
  }

  &:active {
    opacity: 0.8;
  }
`;

export const NavItem = styled(Link)`
  ${NavItemCss}
`;

export const LogoutButton = styled.button`
  ${NavItemCss}
`;
