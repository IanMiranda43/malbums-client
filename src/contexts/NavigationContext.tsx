import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface iNavigationContext {
  NavHomeBtn: string | undefined;
  NavListBtn: string | undefined;
  NavCreateBtn: string | undefined;
}

interface iNavigationContextProvider {
  children: React.ReactNode;
}

const NavigationContext = createContext({} as iNavigationContext);

function useNavigationContext() {
  return useContext(NavigationContext);
}

function NavigationContextProvider({ children }: iNavigationContextProvider) {
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

  return (
    <NavigationContext.Provider
      value={{
        NavHomeBtn,
        NavListBtn,
        NavCreateBtn,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationContext, useNavigationContext, NavigationContextProvider };
