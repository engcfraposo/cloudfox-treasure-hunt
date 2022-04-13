import HeroImg from '../../assets/hero.png';
import { TILE_SIZE } from '../../settings/constants';
import useHeroMovement from './hooks';
import "./styles.css";

const Hero: React.FC = () => {
  const { heroPosition, heroDirection } = useHeroMovement();
  return (
    <div 
      style={{
        bottom: TILE_SIZE * heroPosition.y,
        left: TILE_SIZE * heroPosition.x,
        position: 'absolute',
        width: TILE_SIZE,
        height: 100,
        backgroundImage: `url(${HeroImg})`,
        backgroundPosition: `0 ${TILE_SIZE * -1}`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s steps(4) infinite',
        transform: heroDirection,
      }} 
    />
  );
}

export default Hero;