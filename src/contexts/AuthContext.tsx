import React, { createContext, ReactNode, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import usePersistedState from 'hooks/usePersistedState';
import {
  IUserLogin,
  IUserRegister,
  IUserResponse,
} from 'api/AuthenticationApi';

type TokenType = string | undefined;

type UserType = IUserResponse | undefined;

interface IAuthContextProvider {
  children: ReactNode;
}
interface IAuthContext {
  token: TokenType;
  userData: UserType;
  handleCreateAccount: (userData: IUserRegister) => Promise<void>;
  handleSingIn: (userData: IUserLogin) => Promise<void>;
  handleSingOut: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function useAuthContext() {
  return useContext(AuthContext);
}

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [userData, setUserData] = usePersistedState<UserType>(
    'user',
    undefined,
  );
  const [token, setToken] = usePersistedState<TokenType>('token', undefined);
  const history = useHistory();

  async function handleCreateAccount(userReq: IUserRegister) {
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

  async function handleSingIn(userReq: IUserLogin) {
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
