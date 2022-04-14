import { typeCanvas, typeEvent, typeMovement } from "../settings/constants";


export interface Position {
  x: number;
  y: number;
}

interface EventObservable {
  [key:string]: Position
}

export const handleMovement = (direction: string, position: Position) => {
  const eventObservable: EventObservable = {
    [typeEvent.RIGHT]: { x: position.x +1, y: position.y },
    [typeEvent.LEFT]: { x: position.x -1, y: position.y },
    [typeEvent.UP]: { x: position.x, y: position.y -1 },
    [typeEvent.DOWN]: { x: position.x, y: position.y +1 },
  }
  return eventObservable[direction]
};

const {
  FL, WA, DO, TR, MD, DE, CH, HR,
} = typeCanvas

export const canvas = [
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,DO,DO,WA,WA,WA,WA,WA],
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,DO,DO,WA,WA,WA,WA,WA],
  [WA,FL,FL,WA,FL,FL,FL,FL,WA,FL,FL,FL,FL,FL,FL,FL,WA,FL,FL,WA],
  [WA,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,DE,FL,FL,FL,WA],
  [WA,FL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA,WA,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA,WA,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,FL,TR,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,DE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,WA],
  [WA,HR,WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA],
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA],
];

export const hasValidMovement =(nextPosition, type)=>{
  const canvasValue = canvas[nextPosition.y][nextPosition.x];
  const Movements = {
    [typeMovement.HERO]: getHeroActions(canvasValue),
    [typeMovement.ENEMY]: getEnemyActions(canvasValue),
  }
  return Movements[type]
}

const getHeroActions = (canvasValue) => {
  const valid = [
    typeCanvas.FL,
    typeCanvas.MD,
    typeCanvas.DE,
    typeCanvas.CH,
    typeCanvas.TR,
    typeCanvas.DO,
  ].includes(canvasValue)
  const dead = [ 
    typeCanvas.TR, 
    typeCanvas.MD, 
    typeCanvas.DE
  ].includes(canvasValue)
  const chest = [ typeCanvas.CH ].includes(canvasValue)
  const door = [ typeCanvas.DO ].includes(canvasValue)
  return {
    valid,
    dead,
    chest,
    door,
  }
}

const getEnemyActions = (canvasValue) => {
  const valid = [
    typeCanvas.FL,
    typeCanvas.HR,
  ].includes(canvasValue)
  return {
    valid,
    dead: false,
    chest: false,
    door: false,
  }
}