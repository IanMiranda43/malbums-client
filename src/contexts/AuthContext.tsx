import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

export interface iUser {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface iAuthContext {
  formError?: string;
  setFormError: Dispatch<SetStateAction<string>> | any;
  handleLogin: (userData: iUser) => Promise<void>;
}

const AuthContext = createContext({} as iAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [auth, setAuth] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>();

  useEffect(() => {
    if (
      history.location.pathname !== '/register' &&
      history.location.pathname !== '/login'
    ) {
      if (!auth) {
        history.push('/login');
      }
    }
  }, []);

  async function handleLogin(userData: iUser) {
    const response = {} as { status: number; message: string };

    if (response?.status === 401) {
      setFormError(response.message);
    }

    console.log(userData);
    setAuth(true);
  }

  return (
    <AuthContext.Provider
      value={{
        formError,
        setFormError,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
