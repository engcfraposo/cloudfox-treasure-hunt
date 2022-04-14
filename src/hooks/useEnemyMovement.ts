
import { useCallback, useEffect, useState } from 'react';
import { useCanvas } from '../contexts/CanvasProvider';
import { Position } from '../contexts/helpers';
import { INITIAL_DIRECTION, typeEvent, typeMovement } from '../settings/constants';
import { useInterval } from './useInterval';

const useEnemyMovement = ({INITIAL_POSITION}:{INITIAL_POSITION:Position}) => {
  const { updateCanvas } = useCanvas();
  const [enemyPosition, updateEnemyPosition] = useState<Position>(INITIAL_POSITION);
  const [enemyDirection, updateDirection] = useState<string>(INITIAL_DIRECTION);
  
  const move = () =>{

    const randomDirection = Math.floor(Math.random() * 4)
    const directionArray = Object.values(typeEvent)
    const direction = directionArray[randomDirection]
    const movement = updateCanvas(direction, enemyPosition, typeMovement.ENEMY);  
    if(movement.nextMovement.valid){
      updateEnemyPosition(movement.nextPosition);
    }
    if( direction=== typeEvent.LEFT || direction=== typeEvent.RIGHT){
      updateDirection(`scaleX(${direction === typeEvent.RIGHT?1:-1})`)
    } 
  }

  useInterval(move, 1000)

  return { position: enemyPosition, direction:enemyDirection };
}

export default useEnemyMovement;
