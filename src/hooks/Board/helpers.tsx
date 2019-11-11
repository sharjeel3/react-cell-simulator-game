import { aliveMapType, cellType } from './index';
import { MAX_WIDTH, MAX_HEIGHT } from '../../constants';

export const getAliveMap = (aliveCells: Array<cellType>): aliveMapType => {
  return Object.assign(
    {},
    ...aliveCells.map(cell => {
      return { [cell.id]: cell.alive };
    })
  );
};

export const getNeighbors = (cell: cellType, aliveMap: aliveMapType) => {
  const { x, y } = cell;
  const result = [];
  for (let ii = x - 1; ii <= x + 1; ii++) {
    for (let jj = y - 1; jj <= y + 1; jj++) {
      const id = `${ii}${jj}`;
      if (id === cell.id || ii < 1 || jj < 1 || ii > MAX_WIDTH || jj > MAX_HEIGHT) continue;
      result.push({
        x: ii,
        y: jj,
        id,
        alive: aliveMap[id] || false
      });
    }
  }
  return result;
};
