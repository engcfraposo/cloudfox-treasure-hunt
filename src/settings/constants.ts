export const TILE_SIZE = 48;
export const TILE_SIZE_HALF = TILE_SIZE / 2;
export const DEMON_TILE_SIZE = TILE_SIZE * 2;
export const GAME_SIZE = 20*TILE_SIZE;
export const HEAD_OFFSET = 12
export const INITIAL_DIRECTION = `scaleX(1)`;
export enum typeEvent {
  RIGHT = 'ArrowRight',
  LEFT = 'ArrowLeft',
  UP = 'ArrowUp',
  DOWN = 'ArrowDown'
}

export enum typeCanvas {
  FL = 0,
  WA = 1, 
  DO = 2,
  TR = 3,
  MD = 4,
  DE = 5,
  CH = 6,
  HR = 7
}