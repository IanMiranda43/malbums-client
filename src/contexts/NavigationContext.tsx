import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface iNavigationContextProvider {
  children: React.ReactNode;
}

interface iNavigationContext {
  NavHomeBtn: string | undefined;
  NavListBtn: string | undefined;
  NavCreateBtn: string | undefined;
}

export const NavigationContext = createContext({} as iNavigationContext);

export const useNavigationContext = () => useContext(NavigationContext);

export function NavigationContextProvider({
  children,
}: iNavigationContextProvider) {
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
