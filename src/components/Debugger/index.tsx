import { canvas } from '../../contexts/canvas/helpers';
import Tile from './Tile';


const getCanvasMap = () => {
  let tileComponents = [];
  for(let y = 0; y < canvas.length; y++){
    const canvasY = canvas[y];
    for(let x = 0; x < canvasY.length; x++){
      const position = {x, y};
      const text = canvas[y][x]
      tileComponents.push(<Tile key={`${x}-${y}`} position={position} text={text} />);
    }
  }
  return tileComponents;
}

const Debugger = () => {
  const tilesComponents = getCanvasMap();
  return(
    <div>
      {tilesComponents}
    </div>
  );
}

export default Debugger;