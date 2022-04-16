import React from 'react';
import TilesSet from '../../../../assets/tileset.gif';
import OpenedDoor from '../../../../assets/DOOR-OPEN.png';
import { canvas } from '../../../../contexts/helpers';
import { GAME_SIZE, typeCanvas } from '../../../../settings/constants';
import Chest from '../../static/Chest';
import Demon from '../../dinamic/Demon';
import Hero from '../../dinamic/Hero';
import MiniDemon from '../../dinamic/MiniDemon';
import Trap from '../../static/Trap';
import { useChests } from '../../../../contexts/ChestsProvider';
import { getCanvasMap } from './mapper';


const Board: React.FC = () => {
  const spawn = getCanvasMap();
  const {totalChests, openedChests} = useChests();
  return (
    <div>
        {spawn}
        {totalChests === openedChests.total &&
          <img
          src={OpenedDoor}
          alt="door"
          style={{
            position: 'absolute',
            right:192,
            top: 0,
          }}
        />
        }
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