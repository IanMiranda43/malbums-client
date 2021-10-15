import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import usePersistedState from 'hooks/usePersistedState';
import {
  iUserLogin,
  iUserRegister,
  iUserResponse,
} from 'api/AuthenticationApi';

interface iAuthContextProvider {
  children: React.ReactNode;
}

type iUser = iUserResponse | undefined;

type tokenType = string | undefined;

interface iAuthContext {
  token: tokenType;
  userData: iUser;
  handleCreateAccount: (userData: iUserRegister) => Promise<void>;
  handleSingIn: (userData: iUserLogin) => Promise<void>;
  handleSingOut: () => Promise<void>;
}

const AuthContext = createContext({} as iAuthContext);

function useAuthContext() {
  return useContext(AuthContext);
}

function AuthContextProvider({ children }: iAuthContextProvider) {
  const [userData, setUserData] = usePersistedState<iUser>('user', undefined);
  const [token, setToken] = usePersistedState<tokenType>('token', undefined);
  const history = useHistory();

  async function handleCreateAccount(userReq: iUserRegister) {
    const user = {
      id: 'string',
      token: 'string',
      username: userReq?.username,
      email: userReq?.email,
      created_at: 'string',
      updated_at: 'string',
    };

    setUserData(user);
    setToken(user?.token);

    return history.push('/app');
  }

  async function handleSingIn(userReq: iUserLogin) {
    const user = {
      id: 'string',
      token: 'string',
      username: 'string',
      email: userReq?.email,
      created_at: 'string',
      updated_at: 'string',
    };

    setUserData(user);
    setToken(user?.token);

    return history.push('/app');
  }

  async function handleSingOut() {
    const res = true;

    if (res) {
      localStorage.clear();
      history.replace('/login');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userData,
        handleCreateAccount,
        handleSingIn,
        handleSingOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, useAuthContext, AuthContextProvider };
