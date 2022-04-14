import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { typeCanvas } from '../../settings/constants';
import {  Position } from '../helpers';

interface OpenedChest {
  total: number,
  positions: Position[],
}
export interface ChestContextData {
  totalChests: number,
  openedChests: OpenedChest,
  updateOpenedChests: (position: Position) => any,
}


export const ChestContext = createContext<ChestContextData>(
  {} as ChestContextData,
);

const ChestProvider: React.FC = ({children}) => {
  const [totalChests, setTotalChests] = useState<number>(0);
  const [openedChests, setOpenedChests] = useState<OpenedChest>({
    total: 0,
    positions: [],
  });

  const updateOpenedChests = useCallback((position: Position) => {
    return
  },[]);

  return (
      <ChestContext.Provider
        value={{
          totalChests,
          openedChests,
          updateOpenedChests,
        }}
      >
          {children}
      </ChestContext.Provider>
  );
};

function useChest(): ChestContextData {
  const context = useContext(ChestContext);

  if(!context) {
    throw new Error('useChest must be used within a ChestProvider');
  }

  return context;
}

export { ChestProvider, useChest };