import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthContext } from './AuthContext';
import { usePrivateContext } from './PrivateContext';
import ConfirmationCard from 'components/ConfirmationCard';

interface INavigationContext {
  NavHomeBtn: string | undefined;
  NavListBtn: string | undefined;
  NavCreateBtn: string | undefined;
  handleSingOutClick: () => any;
}

interface INavigationContextProvider {
  children: React.ReactNode;
}

const NavigationContext = createContext({} as INavigationContext);

function useNavigationContext() {
  return useContext(NavigationContext);
}

function NavigationContextProvider({ children }: INavigationContextProvider) {
  const { handleSingOut } = useAuthContext();
  const { setModal } = usePrivateContext();
  const { pathname } = useLocation();
  const [NavHomeBtn, setNavHomeBtn] = useState<string>('active');
  const [NavListBtn, setNavListBtn] = useState<string>();
  const [NavCreateBtn, setNavCreateBtn] = useState<string>();

  useEffect(() => {
    setNavHomeBtn('');
    setNavListBtn('');
    setNavCreateBtn('');

    if (pathname === '/app') {
      setNavHomeBtn('active');
    } else if (pathname === '/app/list') {
      setNavListBtn('active');
    } else if (pathname === '/app/create') {
      setNavCreateBtn('active');
    }
  }, [pathname]);

  function handleSingOutClick() {
    setModal({
      children: (
        <ConfirmationCard
          message="Did you want to sign out?"
          smallMessage="You will need to sign in again"
          callbackFunction={handleSingOut}
        />
      ),
    });
  }

  return (
    <NavigationContext.Provider
      value={{
        NavHomeBtn,
        NavListBtn,
        NavCreateBtn,
        handleSingOutClick,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationContext, useNavigationContext, NavigationContextProvider };
