import ChestImg from '../../../../assets/CHEST.png';
import { useChests } from '../../../../contexts/ChestsProvider';
import { Position } from '../../../../contexts/helpers';
import { TILE_SIZE } from '../../../../settings/constants';
import "./styles.css";

const Chest = ({initialPosition}:{initialPosition: Position}) => {
  const position = initialPosition;
  const { openedChests } = useChests();

  const enableAnimation = openedChests.positions.find(
    chestPosition =>  
      chestPosition.x === initialPosition.x && chestPosition.y === initialPosition.y
  );

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
        backgroundPosition: `0px 0px`,
        animation: enableAnimation && 'chest-animation 1s steps(2) forwards',
      }} 
    />
  );
}

export default Chest;