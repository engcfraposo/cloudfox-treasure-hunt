import MiniDemonImg from '../../assets/MINI-DEMON.png';
import { Position } from '../../contexts/canvas/helpers';
import useEnemyMovement from '../../hooks/useEnemyMovement';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import "./styles.css";

const MiniDemon = ({initialPosition}:{initialPosition: Position}) => {
  const { position, direction } = useEnemyMovement({INITIAL_POSITION:initialPosition});
  return (
    <div 
      style={{
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: `url(${MiniDemonImg})`,
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation 1s steps(4) infinite',
        transform: direction,
        zIndex: 1,
      }} 
    />
  );
}

export default MiniDemon;