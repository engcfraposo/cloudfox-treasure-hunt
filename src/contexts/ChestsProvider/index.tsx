import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';
import {  Position } from '../helpers';

interface OpenedChest {
  total: number;
  positions: Position[];
}

export interface ChestsContextData {
  totalChests: number,
  openedChests: OpenedChest,
  updateOpenedChests: (position: Position) => any,
}


export const ChestsContext = createContext<ChestsContextData>(
  {} as ChestsContextData,
);

const ChestsProvider: React.FC = ({children}) => {
  const totalChests = 2;
  const [openedChests, setOpenedChests] = useState<number>(0);
  const [positions, setPositions] = useState<Position[]>([]);

  const updateOpenedChests = useCallback((position: Position) => {
    setOpenedChests(pStates => pStates + 1);
    setPositions(pStates => [...pStates, position]);
    return {
      totalChests,
      openedChests: {
        total: openedChests,
        positions
      }
    }
  },[]);

  return (
      <ChestsContext.Provider
        value={{
          totalChests,
          openedChests: {
            total: openedChests,
            positions,
          },
          updateOpenedChests,
        }}
      >
          {children}
      </ChestsContext.Provider>
  );
};

function useChests(): ChestsContextData {
  const context = useContext(ChestsContext);

  if(!context) {
    throw new Error('useChests must be used within a ChestProviders');
  }

  return context;
}

export { ChestsProvider, useChests };