import React from 'react';
import ChestImg from '../../assets/CHEST.png';
import { TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const Chest: React.FC = () => {
  return (
    <div 
      style={{
        bottom: TILE_SIZE * 12,
        left: TILE_SIZE * 5,
        position: 'absolute',
        width: TILE_SIZE,
        height: 100,
        backgroundImage: `url(${ChestImg})`,
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation 1s steps(3) infinite',
      }} 
    />
  );
}

export default Chest;