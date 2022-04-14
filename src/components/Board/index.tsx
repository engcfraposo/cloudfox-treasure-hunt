import React from 'react';
import TilesSet from '../../assets/tileset.gif'
import { canvas } from '../../contexts/canvas/helpers';
import { GAME_SIZE, typeCanvas } from '../../settings/constants';
import Chest from '../Chest';
import Demon from '../Demon';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';

const getCanvasMap = () => {
  let array = [];
  for(let y = 0; y < canvas.length; y++){
    const canvasY = canvas[y];
    for(let x = 0; x < canvasY.length; x++){
      const position = {x, y};
      const text = canvas[y][x]
      const respawn = {
        [typeCanvas.HR]: <Hero key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.MD]: <MiniDemon key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.DE]: <Demon key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.TR]: <Trap key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.CH]: <Chest key={`${x}-${y}`} initialPosition={position} />, 
      }
      array.push(respawn[text]);
    }
  }
  return array;
}
const elements = getCanvasMap();
const Board: React.FC = () => {
  return (
    <div>
        {elements}
        <img 
            src={TilesSet} 
            alt="background" 
            width={GAME_SIZE} 
            height={GAME_SIZE}
        />
    </div>
  );
}

export default Board;