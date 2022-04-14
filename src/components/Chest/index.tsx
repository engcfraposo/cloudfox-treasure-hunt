import ChestImg from '../../assets/CHEST.png';
import { Position } from '../../contexts/canvas/helpers';
import { TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const Chest = ({initialPosition}:{initialPosition: Position}) => {
  const position = initialPosition;
  return (
    <div 
      style={{
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: `url(${ChestImg})`,
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation 1s steps(3) infinite',
      }} 
    />
  );
}

export default Chest;