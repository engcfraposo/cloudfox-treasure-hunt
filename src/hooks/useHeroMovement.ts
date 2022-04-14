import useEventListener from '@use-it/event-listener';
import { useState } from 'react';
import { handleMovement, hasValidMovement, Position } from '../contexts/canvas/helpers';
import { INITIAL_DIRECTION, typeEvent } from '../settings/constants';

interface HeroPosition {
    x: number;
    y: number;
}

const useHeroMovement = ({INITIAL_POSITION}:{INITIAL_POSITION:Position}) => {
  const [heroPosition, updateHeroPosition] = useState<Position>(INITIAL_POSITION);
  const [heroDirection, updateDirection] = useState<string>(INITIAL_DIRECTION);
  
  useEventListener('keydown', ({key}:{key:string}) => {
    if(key.includes('Arrow')){
        const newPosition = handleMovement(key, heroPosition);
        const isValidMovement = hasValidMovement(heroPosition, newPosition);
        if(isValidMovement){
          updateHeroPosition(newPosition);
        }
        if( key === typeEvent.LEFT || key === typeEvent.RIGHT){
          updateDirection(`scaleX(${key === typeEvent.RIGHT?1:-1})`)
        } 
    }
  })

  return { position: heroPosition, direction:heroDirection };
}

export default useHeroMovement;
