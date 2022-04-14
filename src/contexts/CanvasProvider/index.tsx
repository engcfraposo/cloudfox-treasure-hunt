import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { typeCanvas } from '../../settings/constants';
import { canvas, handleMovement, hasValidMovement, Position } from '../helpers';

export interface CanvasContextData {
  canvas: Canvas
  updateCanvas: (direction: string, position: Position, type: string) => any
}

export type Canvas = typeCanvas[][];

export const CanvasContext = createContext<CanvasContextData>(
  {} as CanvasContextData,
);

const CanvasProvider: React.FC = ({children}) => {
  const [canvaState, updateCanvasState] = useState<Canvas>(canvas);

  const updateCanvas = (direction: string, currentPosition: Position, type: string) => {
    const nextPosition = handleMovement(direction, currentPosition)
    const nextMovement = hasValidMovement(nextPosition, type);
    
    if(nextMovement.valid) {
      updateCanvasState(prevState => {
        const newCanvas = [...prevState];
        const currentValue = newCanvas[currentPosition.y][currentPosition.x];
        newCanvas[currentPosition.y][currentPosition.x] = typeCanvas.FL;
        newCanvas[nextPosition.y][nextPosition.x] = currentValue;
        return newCanvas;
      });
    }
    return {nextPosition, nextMovement}
  }

  return (
      <CanvasContext.Provider
        value={{
          canvas: canvaState,
          updateCanvas,
        }}
      >
          {children}
      </CanvasContext.Provider>
  );
};

function useCanvas(): CanvasContextData {
  const context = useContext(CanvasContext);

  if(!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }

  return context;
}

export { CanvasProvider, useCanvas };