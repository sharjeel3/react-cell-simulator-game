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
      if (`${ii}${jj}` === cell.id) continue;
      const { newX, newY } = getXYWithWrap(ii, jj);
      const id = `${newX}${newY}`;
      result.push({
        x: newX,
        y: newY,
        id,
        alive: aliveMap[id] || false
      });
    }
  }
  return result;
};

export const getXYWithWrap = (x: number, y: number) => {
  let newX = x;
  let newY = y;

  // Wrap the cells outside board
  if (newX > MAX_WIDTH) newX = newX - MAX_WIDTH;
  else if (newX < 1) newX = MAX_WIDTH + newX;

  if (newY > MAX_HEIGHT) newY = newY - MAX_HEIGHT;
  else if (newY < 1) newY = newY + MAX_HEIGHT;

  return { newX, newY };
};

export const getNextGenerationAliveStatus = (cell: cellType, aliveMap: aliveMapType) => {
  const neighbors = getNeighbors(cell, aliveMap);
  const aliveNeighborsCount = neighbors.filter(item => item.alive).length;
  return !(aliveNeighborsCount < 2 || aliveNeighborsCount > 3);
};
