import { canvas } from "../../../../contexts/helpers";
import { typeCanvas } from "../../../../settings/constants";
import Demon from "../../dinamic/Demon";
import Hero from "../../dinamic/Hero";
import MiniDemon from "../../dinamic/MiniDemon";
import Chest from "../../static/Chest";
import Trap from "../../static/Trap";

export const getCanvasMap = () => {
  let spawn = [];
  for(let y = 0; y < canvas.length; y++){
    const canvasY = canvas[y];
    for(let x = 0; x < canvasY.length; x++){
      const position = {x, y};
      const element = canvas[y][x]
      const elements = {
        [typeCanvas.HR]: <Hero key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.MD]: <MiniDemon key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.DE]: <Demon key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.TR]: <Trap key={`${x}-${y}`} initialPosition={position} />,
        [typeCanvas.CH]: <Chest key={`${x}-${y}`} initialPosition={position} />, 
      }
      spawn.push(elements[element]);
    }
  }
  return spawn;
}