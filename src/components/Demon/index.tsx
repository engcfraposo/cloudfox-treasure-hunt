import React from 'react';
import DemonImg from '../../assets/DEMON.png';
import { TILE_SIZE, DEMON_TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const Demon: React.FC = () => {
  return (
  <div 
    style={{
      bottom: TILE_SIZE * 10,
      left: TILE_SIZE * 10,
      position: 'absolute',
      width: DEMON_TILE_SIZE,
      height: DEMON_TILE_SIZE,
      backgroundImage: `url(${DemonImg})`,
      backgroundRepeat: 'no-repeat',
      animation: 'demon-animation 1s steps(4) infinite',
    }} 
  />
  );
}

export default Demon;