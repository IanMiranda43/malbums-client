import React, {
  createContext,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AuthContext, iUserRequest } from './AuthContext';

type SetFormErrorType = Dispatch<SetStateAction<string>> | any;

interface iAuthRequestContext {
  formError?: string;
  setFormError: SetFormErrorType;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    registerPage: boolean | undefined,
  ) => Promise<void> | undefined;
}

export const AuthRequestContext = createContext({} as iAuthRequestContext);

function handlePasswordMatch(setFormError: SetFormErrorType) {
  const passwordInput = document.getElementById(
    'inputPassword',
  ) as HTMLInputElement;
  const confirmPasswordInput = document.getElementById(
    'inputConfirmPassword',
  ) as HTMLInputElement;

  if (passwordInput?.value !== confirmPasswordInput?.value) {
    passwordInput?.classList.add('error');
    confirmPasswordInput?.classList.add('error');
    setFormError('Passwords need to match');

    return false;
  }

  passwordInput?.classList.remove('error');
  confirmPasswordInput?.classList.remove('error');
  setFormError();

  return true;
}

export const AuthRequestContextProvider: React.FC = ({ children }) => {
  const [formError, setFormError] = useState<string>();
  const { handleSingIn } = useContext(AuthContext);

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    registerPage: boolean | undefined,
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData) as unknown as iUserRequest;

    if (registerPage && !handlePasswordMatch(setFormError)) {
      return;
    }

    return await handleSingIn(userData);
  }

  return (
    <AuthRequestContext.Provider
      value={{
        formError,
        setFormError,
        handleSubmit,
      }}
    >
      {children}
    </AuthRequestContext.Provider>
  );
};
