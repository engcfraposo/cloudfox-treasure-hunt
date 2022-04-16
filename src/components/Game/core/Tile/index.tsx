import { Position } from "../../../../contexts/helpers";
import { TILE_SIZE, typeCanvas } from "../../../../settings/constants";

const Tile = ({position, text}:{position: Position, text:number}) => {
  const colors = {
    [typeCanvas.FL]: "darkgrey",
    [typeCanvas.WA]: "yellow",
    [typeCanvas.DO]: "blue",
    [typeCanvas.HR]: "green",
    [typeCanvas.MD]: "red",
    [typeCanvas.DE]: "red",
    [typeCanvas.TR]: "purple",
    [typeCanvas.CH]: "orange", 
  }
  return (
    <div
      style={{
        top: position.y * TILE_SIZE,
        left: position.x * TILE_SIZE,
        width: TILE_SIZE,
        height: TILE_SIZE,
        border: `2px solid ${colors[text]}`,
        position: "absolute",
        textAlign: "center",
        color: colors[text],
        fontSize: 32,
        zIndex: 2,
      }}
    >
      {text}
    </div>
  );
}

export default Tile;