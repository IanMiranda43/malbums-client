import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { iModal } from 'components/Modal';

type ModalType = iModal | undefined;

interface iPrivateContext {
  modal: ModalType;
  setModal: Dispatch<SetStateAction<ModalType>>;
}

const PrivateContext = createContext({} as iPrivateContext);

function usePrivateContext() {
  return useContext(PrivateContext);
}

function PrivateContextProvider({ children }: PropsWithChildren<any>) {
  const [modal, setModal] = useState<ModalType>();

  return (
    <PrivateContext.Provider value={{ modal, setModal }}>
      {children}
    </PrivateContext.Provider>
  );
}

export { PrivateContext, usePrivateContext, PrivateContextProvider };
