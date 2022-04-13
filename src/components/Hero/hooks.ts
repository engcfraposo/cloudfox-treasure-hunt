import useEventListener from '@use-it/event-listener';
import { useState } from 'react';
import { INITIAL_POSITION, INITIAL_DIRECTION } from '../../settings/constants';

interface EventObservable {
    [key:string]: HeroPosition
}

interface HeroPosition {
    x: number;
    y: number;
}

const useHeroMovement = () => {
  const [heroPosition, updateHeroPosition] = useState<HeroPosition>(INITIAL_POSITION);
  const [heroDirection, updateDirection] = useState<string>(INITIAL_DIRECTION);
  
  const eventObservable: EventObservable = {
    ArrowRight: { x: heroPosition.x +1, y: heroPosition.y },
    ArrowLeft: { x: heroPosition.x -1, y: heroPosition.y },
    ArrowUp: { x: heroPosition.x, y: heroPosition.y +1 },
    ArrowDown: { x: heroPosition.x, y: heroPosition.y -1 },
  }

  useEventListener('keydown', ({key}:{key:string}) => {
    if(key.includes('Arrow')){
        const direction = key.split('Arrow')[1].toLocaleUpperCase()
        updateHeroPosition(eventObservable[key])
        if(direction === 'LEFT' || direction === 'RIGHT'){
          updateDirection(`scaleX(${direction === "RIGHT"? 1:-1})`)
        }
    }
  })

  return { heroPosition, heroDirection };
}

export default useHeroMovement;
