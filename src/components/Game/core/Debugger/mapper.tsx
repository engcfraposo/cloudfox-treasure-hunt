import { Canvas } from "../../../../contexts/CanvasProvider";
import Tile from "../Tile";

export const getCanvasMap = ({canvas}:{canvas:Canvas}) => {
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