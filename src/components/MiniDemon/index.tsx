import React from 'react';
import MiniDemonImg from '../../assets/MINI-DEMON.png';
import { TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const MiniDemon: React.FC = () => {
  return (
    <div 
      style={{
        bottom: TILE_SIZE * 15,
        left: TILE_SIZE * 10,
        position: 'absolute',
        width: TILE_SIZE,
        height: 100,
        backgroundImage: `url(${MiniDemonImg})`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation 1s steps(4) infinite',
      }} 
    />
  );
}

export default MiniDemon;