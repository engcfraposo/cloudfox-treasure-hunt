import HeroImg from '../../../../assets/hero.png';
import { HEAD_OFFSET, TILE_SIZE } from '../../../../settings/constants';
import useHeroMovement from '../../../../hooks/useHeroMovement';
import "./styles.css";
import { Position } from '../../../../contexts/helpers';

const Hero = ({initialPosition}:{initialPosition:Position}) => {
  const { position, direction } = useHeroMovement({INITIAL_POSITION:initialPosition});
  return (
    <div 
      style={{
        top: TILE_SIZE * position.y - HEAD_OFFSET,
        left: TILE_SIZE * position.x,
        position: 'absolute',
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: `url(${HeroImg})`,
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s steps(4) infinite',
        transform: direction,
        zIndex: 1,
      }} 
    />
  );
}

export default Hero;