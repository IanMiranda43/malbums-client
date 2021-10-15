import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import usePersistedState from 'hooks/usePersistedState';
import { iAlbumResponse } from 'api/AlbumsApi';
import { iModal } from 'components/Modal';

export type ModalType = iModal | undefined;
export type AlbumsListType = iAlbumResponse[] | undefined;

interface iPrivateContext {
  modal: ModalType;
  setModal: Dispatch<SetStateAction<ModalType>>;
  albumsList: AlbumsListType;
  setAlbumsList: Dispatch<SetStateAction<AlbumsListType>>;
}

const PrivateContext = createContext({} as iPrivateContext);

function usePrivateContext() {
  return useContext(PrivateContext);
}

function PrivateContextProvider({ children }: PropsWithChildren<any>) {
  const [modal, setModal] = useState<ModalType>();
  const [albumsList, setAlbumsList] = usePersistedState<AlbumsListType>(
    'albums',
    undefined,
  );

  return (
    <PrivateContext.Provider
      value={{ modal, setModal, albumsList, setAlbumsList }}
    >
      {children}
    </PrivateContext.Provider>
  );
}

export { PrivateContext, usePrivateContext, PrivateContextProvider };
