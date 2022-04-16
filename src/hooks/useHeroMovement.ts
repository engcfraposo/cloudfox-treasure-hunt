import useEventListener from '@use-it/event-listener';
import { useState } from 'react';
import { useCanvas } from '../contexts/CanvasProvider';
import { useChests } from '../contexts/ChestsProvider';
import { Position } from '../contexts/helpers';
import { useModal } from '../contexts/ModalProvider';
import { INITIAL_DIRECTION, typeEvent, typeMovement } from '../settings/constants';

const useHeroMovement = ({INITIAL_POSITION}:{INITIAL_POSITION:Position}) => {
  const { updateCanvas } = useCanvas();
  const { updateOpenedChests, totalChests, openedChests } = useChests();
  const { updateWinModal, updateLoseModal, winModal, loseModal } = useModal();
  const [heroPosition, updateHeroPosition] = useState<Position>(INITIAL_POSITION);
  const [heroDirection, updateDirection] = useState<string>(INITIAL_DIRECTION);
  
  useEventListener('keydown', ({key}:{key:string}) => {
    if(key.includes('Arrow')){

        const movement = updateCanvas(key, heroPosition, typeMovement.HERO);
        
        if(movement.nextMovement.valid){
          updateHeroPosition(movement.nextPosition);
          if( key === typeEvent.LEFT || key === typeEvent.RIGHT){
            updateDirection(`scaleX(${key === typeEvent.RIGHT?1:-1})`)
          } 
        }

        if(movement.nextMovement.chest){
          updateOpenedChests(movement.nextPosition)
        }

        if(movement.nextMovement.dead){
          updateLoseModal(true);
          window.location.reload();
        }

        if(totalChests === openedChests.total && movement.nextMovement.door){
          updateWinModal(true)
          window.location.reload();
        }   
    }
  })

  return { position: heroPosition, direction:heroDirection };
}

export default useHeroMovement;
