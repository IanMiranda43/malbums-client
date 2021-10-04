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

export const AuthContext = createContext(
  {} as {
    handleSingIn: (userData: iUserRequest) => Promise<void>;
  },
);

function checkLocalStorageUser() {
  const storedUser = localStorage.getItem('user');

  if (storedUser) return JSON.parse(storedUser);

  return {} as iUser;
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [userStored, setUserStored] = useState<iUser>(checkLocalStorageUser);
  const { setFormError } = useContext(AuthRequestContext);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userStored));
  }, [userStored]);

  useEffect(() => {
    const { pathname } = history.location;

    if (
      !('email' in userStored) &&
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

    setUserStored(userData);

    // const { user } = response;

    // setUserStored(user);
    // localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ handleSingIn }}>
      {children}
    </AuthContext.Provider>
  );
};
