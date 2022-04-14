import { useCallback, useEffect, useState } from 'react';
import { handleMovement, hasValidMovement, Position } from '../contexts/canvas/helpers';
import { INITIAL_DIRECTION, typeEvent } from '../settings/constants';

const useEnemyMovement = ({INITIAL_POSITION}:{INITIAL_POSITION:Position}) => {
  const [enemyPosition, updateEnemyPosition] = useState<Position>(INITIAL_POSITION);
  const [enemyDirection, updateDirection] = useState<string>(INITIAL_DIRECTION);
  
  const move = useCallback(() =>{
    const randomDirection = Math.floor(Math.random() * 4)
    const directionArray = Object.values(typeEvent)
    const direction = directionArray[randomDirection]
      if( direction=== typeEvent.LEFT || direction=== typeEvent.RIGHT){
        updateDirection(`scaleX(${direction === typeEvent.RIGHT?1:-1})`)
      } 
    const newPosition = handleMovement(direction, enemyPosition)
    const isValidMovement = hasValidMovement(enemyPosition, newPosition);
    if(isValidMovement){
      updateEnemyPosition(newPosition);
    }
  },[]);

  useEffect(() => {
    setInterval(move, 4000)
  },[])

  return { position: enemyPosition, direction:enemyDirection };
}

export default useEnemyMovement;
