import React from 'react';
import TrapImg from '../../assets/TRAP.png';
import { TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const Trap: React.FC = () => {
  return (
  <div 
    style={{
      bottom: TILE_SIZE * 12,
      left: TILE_SIZE * 15,
      position: 'absolute',
      width: TILE_SIZE,
      height: 100,
      backgroundImage: `url(${TrapImg})`,
      backgroundRepeat: 'no-repeat',
      animation: 'trap-animation 1s steps(8) infinite',
    }} 
  />
  );
}

export default Trap;