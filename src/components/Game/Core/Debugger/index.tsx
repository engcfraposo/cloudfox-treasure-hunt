import { useCanvas } from '../../../../contexts/CanvasProvider';
import { getCanvasMap } from './mapper';
const Debugger = () => {
  const { canvas } = useCanvas();
  const tilesComponents = getCanvasMap({canvas});
  return(
    <div>
      {tilesComponents}
    </div>
  );
}

export default Debugger;