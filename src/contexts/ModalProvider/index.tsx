import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

export interface ModalContextData {
  winModal: boolean,
  loseModal: boolean,
  updateWinModal: (status: boolean) => void,
  updateLoseModal: (status: boolean) => void,
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

const ModalProvider: React.FC = ({children}) => {
  const [winModal, setWinModal] = useState<boolean>(false);
  const [loseModal, setLoseModal] = useState<boolean>(false);

  const updateWinModal = useCallback((status:boolean) => {
    setWinModal(status);
  },[]);

  const updateLoseModal = useCallback((status:boolean) => {
    setLoseModal(status);
  },[]);
  

  return (
      <ModalContext.Provider
        value={{
          winModal,
          loseModal,
          updateWinModal,
          updateLoseModal,
        }}
      >
          {children}
      </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if(!context) {
    throw new Error('useModal must be used within a ModalProviders');
  }

  return context;
}

export { ModalProvider, useModal };