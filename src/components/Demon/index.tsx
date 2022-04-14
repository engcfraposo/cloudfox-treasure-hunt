import DemonImg from '../../assets/DEMON.png';
import { Position } from '../../contexts/canvas/helpers';
import useEnemyMovement from '../../hooks/useEnemyMovement';
import { TILE_SIZE, DEMON_TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const Demon = ({initialPosition}:{initialPosition: Position}) => {
  const { position, direction } = useEnemyMovement({INITIAL_POSITION:initialPosition});
  return (
  <div 
    style={{
      top: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      position: 'absolute',
      width: DEMON_TILE_SIZE,
      height: DEMON_TILE_SIZE,
      backgroundImage: `url(${DemonImg})`,
      backgroundRepeat: 'no-repeat',
      animation: 'demon-animation 1s steps(4) infinite',
      transform: direction,
    }} 
  />
  );
}

export default Demon;