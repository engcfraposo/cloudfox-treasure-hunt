import React from 'react';
import TilesSet from '../../assets/tileset.gif'
import { GAME_SIZE } from '../../settings/constants';
import Chest from '../Chest';
import Demon from '../Demon';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';

const Board: React.FC = () => {
  return (
    <div>
        <Hero />
        <img 
            src={TilesSet} 
            alt="background" 
            width={GAME_SIZE} 
            height={GAME_SIZE}
        />
        <MiniDemon />
        <Demon />
        <Chest />
        <Trap />
    </div>
   
  );
}

export default Board;