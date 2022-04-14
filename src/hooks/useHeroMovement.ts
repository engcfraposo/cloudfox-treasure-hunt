import useEventListener from '@use-it/event-listener';
import { useState } from 'react';
import { useCanvas } from '../contexts/CanvasProvider';
import { useChest } from '../contexts/ChestProvider';
import { Position } from '../contexts/helpers';
import { INITIAL_DIRECTION, typeEvent, typeMovement } from '../settings/constants';

const useHeroMovement = ({INITIAL_POSITION}:{INITIAL_POSITION:Position}) => {
  const { updateCanvas } = useCanvas();
  const { updateOpenedChests } = useChest();
  const [heroPosition, updateHeroPosition] = useState<Position>(INITIAL_POSITION);
  const [heroDirection, updateDirection] = useState<string>(INITIAL_DIRECTION);
  
  useEventListener('keydown', ({key}:{key:string}) => {
    if(key.includes('Arrow')){

        const movement = updateCanvas(key, heroPosition, typeMovement.HERO);
        
        if(movement.nextMovement.valid){
          updateHeroPosition(movement.nextPosition);
        }

        if(movement.nextMovement.chest){
          console.log("abriu bau")
          updateOpenedChests(movement.nextMovement.chest)
        }

        if( key === typeEvent.LEFT || key === typeEvent.RIGHT){
          updateDirection(`scaleX(${key === typeEvent.RIGHT?1:-1})`)
        } 
    }
  })

  return { position: heroPosition, direction:heroDirection };
}

export default useHeroMovement;
