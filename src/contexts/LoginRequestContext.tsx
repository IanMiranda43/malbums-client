import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface iAuthRequestContext<T> {
  formError?: string;
  setFormError?: Dispatch<SetStateAction<T>>;
  nameError?: string;
  setNameError?: Dispatch<SetStateAction<T>>;
  emailError?: string;
  setEmailError?: Dispatch<SetStateAction<T>>;
  passwordError?: string;
  setPasswordError?: Dispatch<SetStateAction<T>>;
  confirmPasswordError?: string;
  setConfirmPasswordError?: Dispatch<SetStateAction<T>>;
}

const AuthRequestContext = createContext<iAuthRequestContext<string>>({});

export const useAuthRequestContext = () => useContext(AuthRequestContext);

export const AuthRequestContextProvider: React.FC = ({ children }) => {
  const [formError, setFormError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const authRequestContextValue = {
    formError,
    setFormError,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    confirmPasswordError,
    setConfirmPasswordError,
  };

  return (
    <AuthRequestContext.Provider value={authRequestContextValue}>
      {children}
    </AuthRequestContext.Provider>
  );
};
