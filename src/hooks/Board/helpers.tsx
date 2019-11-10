import { aliveMapType, cellType } from './index';

export const getAliveMap = (aliveCells: Array<cellType>): aliveMapType => {
  return Object.assign(
    {},
    ...aliveCells.map(cell => {
      return { [cell.id]: cell.alive };
    })
  );
};
