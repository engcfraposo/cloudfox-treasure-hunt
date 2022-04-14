import React from 'react';
import TrapImg from '../../assets/TRAP.png';
import { Position } from '../../contexts/canvas/helpers';
import { TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const Trap = ({initialPosition}:{initialPosition: Position}) => {
  const position = initialPosition;
  return (
  <div 
    style={{
      top: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      position: 'absolute',
      width: TILE_SIZE,
      height: TILE_SIZE,
      backgroundImage: `url(${TrapImg})`,
      backgroundRepeat: 'no-repeat',
      animation: 'trap-animation 1s steps(8) infinite',
      border: '2px solid red',
    }} 
  />
  );
}

export default Trap;