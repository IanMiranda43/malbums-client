import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthRequestContext } from './AuthRequestContext';

export interface iUserRequest {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type iUser = iUserRequest;

interface iAuthContext {
  user: iUser;
  handleSingIn: (userData: iUserRequest) => Promise<void>;
}

export const AuthContext = createContext({} as iAuthContext);

function checkLocalStorageUser() {
  const storedUser = localStorage.getItem('user');

  if (storedUser) return JSON.parse(storedUser);

  return {} as iUser;
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<iUser>(checkLocalStorageUser);
  const { setFormError } = useContext(AuthRequestContext);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const { pathname } = history.location;

    if (
      !('email' in user) &&
      pathname !== '/register' &&
      pathname !== '/login'
    ) {
      history.push('/login');
    }
  }, []);

  async function handleSingIn(userData: iUserRequest) {
    const response = {} as { status: number; message: string };

    if (response?.status === 401) {
      setFormError(response.message);
    }

    setUser(userData);
    history.push('/');

    // const { user } = response;

    // setUser(user);
    // localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ user, handleSingIn }}>
      {children}
    </AuthContext.Provider>
  );
};
