import React, {
  createContext,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AuthContext, iUserRequest } from './AuthContext';

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
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    registerPage: boolean | undefined,
  ) => Promise<void> | undefined;
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
  const [passwordError, setPasswordError] = useState<string>();
  const [formError, setFormError] = useState<string>();
  const { handleSingIn } = useContext(AuthContext);

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    registerPage: boolean | undefined,
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData) as unknown as iUserRequest;

    if (
      registerPage &&
      !handlePasswordMatch({ setFormError, setPasswordError })
    ) {
      return;
    }

    return await handleSingIn(userData);
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
