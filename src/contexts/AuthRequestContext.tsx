import React, {
  createContext,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { iUserLogin, iUserRegister } from 'services/AuthRequestsService';
import { useAuthContext } from './AuthContext';

interface iAuthRequestContextProvider {
  children: React.ReactNode;
}

interface iHandlePasswordMatch {
  setFormError: Dispatch<SetStateAction<string>> | any;
  setPasswordError: Dispatch<SetStateAction<string>> | any;
}

interface iAuthRequestContext extends iHandlePasswordMatch {
  passwordError?: string;
  formError?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>, registerPage?: boolean) => void;
}

export const AuthRequestContext = createContext({} as iAuthRequestContext);

export function useAuthRequestContext() {
  return useContext(AuthRequestContext);
}

function handlePasswordMatch({
  setFormError,
  setPasswordError,
}: iHandlePasswordMatch) {
  const passwordInput = document.getElementById(
    'inputPassword',
  ) as HTMLInputElement;
  const confirmPasswordInput = document.getElementById(
    'inputConfirmPassword',
  ) as HTMLInputElement;

  if (passwordInput?.value !== confirmPasswordInput?.value) {
    setPasswordError('error');
    setFormError('Passwords need to match');

    return false;
  }

  setPasswordError();
  setFormError();

  return true;
}

export function AuthRequestContextProvider({
  children,
}: iAuthRequestContextProvider) {
  const { handleCreateAccount, handleSingIn } = useAuthContext();
  const [passwordError, setPasswordError] = useState<string>();
  const [formError, setFormError] = useState<string>();

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    registerPage?: boolean,
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData) as unknown;

    if (!registerPage) {
      return handleSingIn(userData as iUserLogin);
    }

    if (handlePasswordMatch({ setFormError, setPasswordError })) {
      return handleCreateAccount(userData as iUserRegister);
    }
  }

  return (
    <AuthRequestContext.Provider
      value={{
        passwordError,
        formError,
        setFormError,
        setPasswordError,
        handleSubmit,
      }}
    >
      {children}
    </AuthRequestContext.Provider>
  );
}
