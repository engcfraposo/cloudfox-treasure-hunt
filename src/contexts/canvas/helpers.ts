import { useState } from "react";
import { typeCanvas, typeEvent } from "../../settings/constants";


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
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,FL,TR,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,DE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,HR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA],
];

export const hasValidMovement =(currentPosition, nextPosition)=>{
  const canvasNextPosition = canvas[nextPosition.y][nextPosition.x];
  if(canvasNextPosition === typeCanvas.WA){
    return false;
  }
  if(canvasNextPosition === typeCanvas.CH){
    console.log('pisou no bau');
  }
  if(canvasNextPosition === typeCanvas.TR){
    console.log('pisou na trap');
  }
  return true
}